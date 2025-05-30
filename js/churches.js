document.addEventListener('DOMContentLoaded', function() {
    // Sample church data for Kisii County with specified stations
    const churches = [
        {
            name: "Nyanchwa SDA Church",
            district: "Kisii Central",
            station: "Nyanchwa",
            contact: "+254 712 345 678",
            address: "Nyanchwa, Near Nyanchwa Market"
        },
        {
            name: "Itumbe SDA Church",
            district: "Kisii South",
            station: "Itumbe",
            contact: "+254 723 456 789",
            address: "Itumbe, Along Itumbe-Kisii Road"
        },
        {
            name: "Gesabakwa SDA Church",
            district: "Kisii Central",
            station: "Gesabakwa",
            contact: "+254 734 567 890",
            address: "Gesabakwa, Near Gesabakwa Market"
        },
        {
            name: "Riondong'a SDA Church",
            district: "Kisii South",
            station: "Riondong'a",
            contact: "+254 745 678 901",
            address: "Riondong'a, Off Riondong'a-Suneka Road"
        },
        {
            name: "Masimba SDA Church",
            district: "Kisii Central",
            station: "Masimba",
            contact: "+254 756 789 012",
            address: "Masimba, Near Masimba Market"
        },
        {
            name: "Suneka SDA Church",
            district: "Kisii South",
            station: "Suneka",
            contact: "+254 767 890 123",
            address: "Suneka, Along Suneka-Kisii Road"
        },
        {
            name: "Riana SDA Church",
            district: "Kisii Central",
            station: "Riana",
            contact: "+254 778 901 234",
            address: "Riana, Near Riana Market"
        },
        {
            name: "Nyanchwa Central SDA Church",
            district: "Kisii Central",
            station: "Nyanchwa",
            contact: "+254 789 012 345",
            address: "Nyanchwa, Near Nyanchwa Primary School"
        },
        {
            name: "Itumbe Central SDA Church",
            district: "Kisii South",
            station: "Itumbe",
            contact: "+254 790 123 456",
            address: "Itumbe, Near Itumbe Secondary School"
        },
        {
            name: "Gesabakwa Central SDA Church",
            district: "Kisii Central",
            station: "Gesabakwa",
            contact: "+254 701 234 567",
            address: "Gesabakwa, Near Gesabakwa Health Center"
        },
        {
            name: "Riondong'a Central SDA Church",
            district: "Kisii South",
            station: "Riondong'a",
            contact: "+254 712 345 678",
            address: "Riondong'a, Near Riondong'a Primary School"
        },
        {
            name: "Masimba Central SDA Church",
            district: "Kisii Central",
            station: "Masimba",
            contact: "+254 723 456 789",
            address: "Masimba, Near Masimba Secondary School"
        },
        {
            name: "Suneka Central SDA Church",
            district: "Kisii South",
            station: "Suneka",
            contact: "+254 734 567 890",
            address: "Suneka, Near Suneka Health Center"
        },
        {
            name: "Riana Central SDA Church",
            district: "Kisii Central",
            station: "Riana",
            contact: "+254 745 678 901",
            address: "Riana, Near Riana Primary School"
        }
    ];

    // Get DOM elements
    const churchesGrid = document.getElementById('churchesGrid');
    const searchInput = document.getElementById('churchSearch');
    const districtFilter = document.getElementById('districtFilter');
    const stationFilter = document.getElementById('stationFilter');

    // Populate filter options
    function populateFilters() {
        const districts = [...new Set(churches.map(church => church.district))];
        const stations = [...new Set(churches.map(church => church.station))];

        // Sort districts and stations alphabetically
        districts.sort();
        stations.sort();

        districts.forEach(district => {
            const option = document.createElement('option');
            option.value = district;
            option.textContent = district;
            districtFilter.appendChild(option);
        });

        stations.forEach(station => {
            const option = document.createElement('option');
            option.value = station;
            option.textContent = station;
            stationFilter.appendChild(option);
        });
    }

    // Create church card
    function createChurchCard(church) {
        const card = document.createElement('div');
        card.className = 'church-card fade-in';
        card.innerHTML = `
            <h3>${church.name}</h3>
            <p><strong>District:</strong> ${church.district}</p>
            <p><strong>Station:</strong> ${church.station}</p>
            <p><strong>Contact:</strong> ${church.contact}</p>
            <p><strong>Address:</strong> ${church.address}</p>
        `;
        return card;
    }

    // Filter and display churches
    function displayChurches() {
        const searchTerm = searchInput.value.toLowerCase();
        const selectedDistrict = districtFilter.value;
        const selectedStation = stationFilter.value;

        const filteredChurches = churches.filter(church => {
            const matchesSearch = church.name.toLowerCase().includes(searchTerm) ||
                                church.district.toLowerCase().includes(searchTerm) ||
                                church.station.toLowerCase().includes(searchTerm) ||
                                church.address.toLowerCase().includes(searchTerm);
            
            const matchesDistrict = !selectedDistrict || church.district === selectedDistrict;
            const matchesStation = !selectedStation || church.station === selectedStation;

            return matchesSearch && matchesDistrict && matchesStation;
        });

        churchesGrid.innerHTML = '';
        filteredChurches.forEach(church => {
            const card = createChurchCard(church);
            churchesGrid.appendChild(card);
        });

        // Trigger fade-in animation
        setTimeout(() => {
            document.querySelectorAll('.fade-in').forEach(element => {
                element.classList.add('visible');
            });
        }, 100);
    }

    // Event listeners
    searchInput.addEventListener('input', displayChurches);
    districtFilter.addEventListener('change', displayChurches);
    stationFilter.addEventListener('change', displayChurches);

    // Initialize
    populateFilters();
    displayChurches();
}); 