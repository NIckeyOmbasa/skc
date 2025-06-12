//Events data
const eventsData = {
    '2025': {
        quarter1: {
            january: [
                {
                    startDay: 4,
                    endDay: 4,
                    month: 'January',
                    name: 'Quarterly Day of Prayer',
                    department: 'General',
                    venue: 'Local church'
                },
                {
                    startDay: 8,
                    endDay: 18,
                    month: 'January',
                    name: 'Ten Days of Prayer',
                    department: 'General',
                    venue: 'Local church'
                },
                {
                    startDay: 11,
                    endDay: 11,
                    month: 'January',
                    name: 'Health Ministries',
                    department: 'Health',
                    venue: 'Local church'
                },
                {
                    startDay: 18,
                    endDay: 18,
                    month: 'January',
                    name: 'Religious Liberty Day',
                    department: 'Religious Liberty',
                    venue: 'Local church'
                }
            ],
            february: [
                {
                    startDay: 1,
                    endDay: 1,
                    month: 'February',
                    name: 'Reach the World: Personal Outreach',
                    department: 'Sabbath School and Personal Ministries',
                    venue: 'Local church'
                },
                {
                    startDay: 8,
                    endDay: 15,
                    month: 'February',
                    name: 'Christian Home and Marriage Week',
                    department: 'Family Ministries',
                    venue: 'Local church'
                }
            ],
            march: [
                {
                    startDay: 1,
                    endDay: 1,
                    month: 'March',
                    name: 'Women\'s Day of Prayer',
                    department: 'Women\'s Ministries',
                    venue: 'Local church'
                },
                {
                    startDay: 8,
                    endDay: 8,
                    month: 'March',
                    name: 'Adventist World Radio',
                    department: 'Communication',
                    venue: 'Local church'
                },
                {
                    startDay: 15,
                    endDay: 22,
                    month: 'March',
                    name: 'Youth Week of Prayer',
                    department: 'Youth Ministries',
                    venue: 'Local church'
                },
                {
                    startDay: 15,
                    endDay: 15,
                    month: 'March',
                    name: 'Global Youth Day',
                    department: 'Youth Ministries',
                    venue: 'Local church'
                },
                {
                    startDay: 15,
                    endDay: 15,
                    month: 'March',
                    name: 'Global Children\'s Day',
                    department: 'Children\'s Ministries',
                    venue: 'Local church'
                },
                {
                    startDay: 22,
                    endDay: 22,
                    month: 'March',
                    name: 'Christian Education',
                    department: 'Education',
                    venue: 'Local church'
                }
            ]
        },
        quarter2: {
            april: [
                {
                    startDay: 5,
                    endDay: 5,
                    month: 'April',
                    name: 'Quarterly Day of Prayer',
                    department: 'Spiritual Development',
                    venue: 'Local church'
                },
                {
                    startDay: 5,
                    endDay: 5,
                    month: 'April',
                    name: 'World Ambassador Day',
                    department: 'Youth Ministries',
                    venue: 'Local church'
                },
                {
                    startDay: 12,
                    endDay: 18,
                    month: 'April',
                    name: 'Literature Evangelism Rally Week',
                    department: 'Publishing',
                    venue: 'Local church'
                },
                {
                    startDay: 12,
                    endDay: 12,
                    month: 'April',
                    name: 'Friends of Hope Day (Visitor\'s Day)',
                    department: 'Sabbath School and Personal Ministries',
                    venue: 'Local church'
                },
                {
                    startDay: 12,
                    endDay: 12,
                    month: 'April',
                    name: 'Hope Channel International',
                    department: 'Communication',
                    venue: 'Local church'
                },
                {
                    startDay: 12,
                    endDay: 12,
                    month: 'April',
                    name: 'World Impact Day—for Distribution of Missionary Book',
                    department: 'Mission',
                    venue: 'Local church'
                },
                {
                    startDay: 19,
                    endDay: 19,
                    month: 'April',
                    name: 'Possibility Ministries Day',
                    department: 'Possibility Ministries',
                    venue: 'Local church'
                }
            ],
            may: [
                {
                    startDay: 3,
                    endDay: 31,
                    month: 'May',
                    name: 'Drug Awareness Month',
                    department: 'Health Ministries',
                    venue: 'Local church'
                },
                {
                    startDay: 3,
                    endDay: 3,
                    month: 'May',
                    name: 'Reach the World: Using Communication Channels',
                    department: 'Communication',
                    venue: 'Local church'
                },
                {
                    startDay: 17,
                    endDay: 17,
                    month: 'May',
                    name: 'Global Adventurer\'s Day',
                    department: 'Youth Ministries',
                    venue: 'Local church'
                },
                {
                    startDay: 24,
                    endDay: 24,
                    month: 'May',
                    name: 'World Day of Prayer for Children at Risk',
                    department: 'Children\'s Ministries',
                    venue: 'Local church'
                }
            ],
            june: [
                {
                    startDay: 7,
                    endDay: 7,
                    month: 'June',
                    name: 'Reach the World: Bible Study: Sabbath School and Correspondence Courses',
                    department: 'Sabbath School',
                    venue: 'Local church'
                },
                {
                    startDay: 14,
                    endDay: 14,
                    month: 'June',
                    name: 'Women\'s Ministries Emphasis Day',
                    department: 'Women\'s Ministries',
                    venue: 'Local church'
                },
                {
                    startDay: 21,
                    endDay: 21,
                    month: 'June',
                    name: 'Reach the World: Nurturing Other Members and Reclaiming',
                    department: 'Sabbath School',
                    venue: 'Local church'
                },
                {
                    startDay: 21,
                    endDay: 21,
                    month: 'June',
                    name: 'Adventist Church World Refugee Day',
                    department: 'ADRA',
                    venue: 'Local church'
                },
                {
                    startDay: 28,
                    endDay: 28,
                    month: 'June',
                    name: 'World Public Campus Ministries Day',
                    department: 'Youth Ministries',
                    venue: 'Local church'
                }
            ]
        },
        quarter3: {
            july: [
                {
                    startDay: 5,
                    endDay: 5,
                    month: 'July',
                    name: 'Quarterly Day of Prayer',
                    department: 'Spiritual Development',
                    venue: 'Local church'
                },
                {
                    startDay: 12,
                    endDay: 12,
                    month: 'July',
                    name: 'Mission Promotion: World Mission',
                    department: 'Mission',
                    venue: 'Local church'
                },
                {
                    startDay: 19,
                    endDay: 19,
                    month: 'July',
                    name: 'Reach the World: Media Ministry',
                    department: 'Communication',
                    venue: 'Local church'
                },
                {
                    startDay: 26,
                    endDay: 26,
                    month: 'July',
                    name: 'Children\'s Sabbath',
                    department: 'Children\'s Ministries',
                    venue: 'Local church'
                }
            ],
            august: [
                {
                    startDay: 2,
                    endDay: 2,
                    month: 'August',
                    name: 'Global Mission Evangelism',
                    department: 'Mission',
                    venue: 'Local church'
                },
                {
                    startDay: 9,
                    endDay: 9,
                    month: 'August',
                    name: 'Reach the World: Church Planting',
                    department: 'Mission',
                    venue: 'Local church'
                },
                {
                    startDay: 16,
                    endDay: 16,
                    month: 'August',
                    name: 'Education Day',
                    department: 'Education',
                    venue: 'Local church'
                },
                {
                    startDay: 23,
                    endDay: 23,
                    month: 'August',
                    name: 'enditnow Day',
                    department: 'Women\'s Ministries',
                    venue: 'Local church'
                },
                {
                    startDay: 23,
                    endDay: 23,
                    month: 'August',
                    name: 'Lay Evangelism',
                    department: 'Mission',
                    venue: 'Local church'
                }
            ],
            september: [
                {
                    startDay: 6,
                    endDay: 6,
                    month: 'September',
                    name: 'Youth Spiritual and Mission Commitment Day',
                    department: 'Youth Ministries',
                    venue: 'Local church'
                },
                {
                    startDay: 7,
                    endDay: 13,
                    month: 'September',
                    name: 'Family Togetherness Week of Prayer',
                    department: 'Family Ministries',
                    venue: 'Local church'
                },
                {
                    startDay: 13,
                    endDay: 13,
                    month: 'September',
                    name: 'Family Togetherness Day of Prayer',
                    department: 'Family Ministries',
                    venue: 'Local church'
                },
                {
                    startDay: 13,
                    endDay: 13,
                    month: 'September',
                    name: 'Mission Promotion: Unusual Opportunities',
                    department: 'Mission',
                    venue: 'Local church'
                },
                {
                    startDay: 20,
                    endDay: 20,
                    month: 'September',
                    name: 'Pathfinder Day',
                    department: 'Youth Ministries',
                    venue: 'Local church'
                },
                {
                    startDay: 27,
                    endDay: 27,
                    month: 'September',
                    name: 'Sabbath School Guest Day',
                    department: 'Sabbath School',
                    venue: 'Local church'
                }
            ]
        },
        quarter4: {
            october: [
                {
                    startDay: 4,
                    endDay: 4,
                    month: 'October',
                    name: 'Quarterly Day of Prayer',
                    department: 'Spiritual Development',
                    venue: 'Local church'
                },
                {
                    startDay: 4,
                    endDay: 4,
                    month: 'October',
                    name: 'Adventist Review Subscription Promotion',
                    department: 'Communication',
                    venue: 'Local church'
                },
                {
                    startDay: 11,
                    endDay: 11,
                    month: 'October',
                    name: 'Pastor Appreciation Day',
                    department: 'Ministry',
                    venue: 'Local church'
                },
                {
                    startDay: 18,
                    endDay: 18,
                    month: 'October',
                    name: 'Spirit of Prophecy and Adventist Heritage',
                    department: 'Spiritual Development',
                    venue: 'Local church'
                },
                {
                    startDay: 25,
                    endDay: 25,
                    month: 'October',
                    name: 'Creation Sabbath',
                    department: 'Spiritual Development',
                    venue: 'Local church'
                }
            ],
            november: [
                {
                    startDay: 1,
                    endDay: 8,
                    month: 'November',
                    name: 'Week of Prayer',
                    department: 'Spiritual Development',
                    venue: 'Local church'
                },
                {
                    startDay: 8,
                    endDay: 14,
                    month: 'November',
                    name: 'e-Week of Prayer for Youth and Young Adults',
                    department: 'Youth Ministries',
                    venue: 'Local church'
                },
                {
                    startDay: 8,
                    endDay: 8,
                    month: 'November',
                    name: 'Mission Promotion: Annual Sacrifice',
                    department: 'Mission',
                    venue: 'Local church'
                },
                {
                    startDay: 15,
                    endDay: 15,
                    month: 'November',
                    name: 'World Orphans-Vulnerable Children Day',
                    department: 'Children\'s Ministries',
                    venue: 'Local church'
                },
                {
                    startDay: 22,
                    endDay: 22,
                    month: 'November',
                    name: 'HIV/AIDS Awareness',
                    department: 'Health Ministries',
                    venue: 'Local church'
                },
                {
                    startDay: 29,
                    endDay: 6,
                    month: 'November',
                    name: 'Stewardship Revival Week',
                    department: 'Stewardship',
                    venue: 'Local church'
                }
            ],
            december: [
                {
                    startDay: 6,
                    endDay: 6,
                    month: 'December',
                    name: 'Annual Stewardship Sabbath',
                    department: 'Stewardship',
                    venue: 'Local church'
                },
                {
                    startDay: 13,
                    endDay: 13,
                    month: 'December',
                    name: 'Health Emphasis',
                    department: 'Health Ministries',
                    venue: 'Local church'
                }
            ]
        }
    },
    '2026': {
        quarter1: {
            january: [
                {
                    startDay: 3,
                    endDay: 3,
                    month: 'January',
                    name: 'Quarterly Day of Prayer',
                    department: 'General',
                    venue: 'Local church'
                },
                {
                    startDay: 7,
                    endDay: 17,
                    month: 'January',
                    name: 'Ten Days of Prayer',
                    department: 'General',
                    venue: 'Local church'
                },
                {
                    startDay: 10,
                    endDay: 10,
                    month: 'January',
                    name: 'Health Ministries',
                    department: 'Health',
                    venue: 'Local church'
                },
                {
                    startDay: 17,
                    endDay: 17,
                    month: 'January',
                    name: 'Religious Liberty Day',
                    department: 'Religious Liberty',
                    venue: 'Local church'
                }
            ],
            february: [
                {
                    startDay: 7,
                    endDay: 7,
                    month: 'February',
                    name: 'Reach the World: Personal Outreach',
                    department: 'Sabbath School and Personal Ministries',
                    venue: 'Local church'
                },
                {
                    startDay: 14,
                    endDay: 21,
                    month: 'February',
                    name: 'Christian Home and Marriage Week',
                    department: 'Family Ministries',
                    venue: 'Local church'
                }
            ],
            march: [
                {
                    startDay: 7,
                    endDay: 7,
                    month: 'March',
                    name: 'Women\'s Day of Prayer',
                    department: 'Women\'s Ministries',
                    venue: 'Local church'
                },
                {
                    startDay: 14,
                    endDay: 14,
                    month: 'March',
                    name: 'Adventist World Radio',
                    department: 'Communication',
                    venue: 'Local church'
                },
                {
                    startDay: 21,
                    endDay: 28,
                    month: 'March',
                    name: 'Youth Week of Prayer',
                    department: 'Youth Ministries',
                    venue: 'Local church'
                },
                {
                    startDay: 21,
                    endDay: 21,
                    month: 'March',
                    name: 'Global Youth Day',
                    department: 'Youth Ministries',
                    venue: 'Local church'
                },
                {
                    startDay: 21,
                    endDay: 21,
                    month: 'March',
                    name: 'Global Children\'s Day',
                    department: 'Children\'s Ministries',
                    venue: 'Local church'
                },
                {
                    startDay: 28,
                    endDay: 28,
                    month: 'March',
                    name: 'Christian Education',
                    department: 'Education',
                    venue: 'Local church'
                }
            ]
        },
        quarter2: {
            april: [
                {
                    startDay: 4,
                    endDay: 4,
                    month: 'April',
                    name: 'Quarterly Day of Prayer',
                    department: 'Spiritual Development',
                    venue: 'Local church'
                },
                {
                    startDay: 4,
                    endDay: 4,
                    month: 'April',
                    name: 'World Ambassador Day',
                    department: 'Youth Ministries',
                    venue: 'Local church'
                },
                {
                    startDay: 11,
                    endDay: 17,
                    month: 'April',
                    name: 'Literature Evangelism Rally Week',
                    department: 'Publishing',
                    venue: 'Local church'
                },
                {
                    startDay: 11,
                    endDay: 11,
                    month: 'April',
                    name: 'Friends of Hope Day (Visitor\'s Day)',
                    department: 'Sabbath School and Personal Ministries',
                    venue: 'Local church'
                },
                {
                    startDay: 11,
                    endDay: 11,
                    month: 'April',
                    name: 'Hope Channel International',
                    department: 'Communication',
                    venue: 'Local church'
                },
                {
                    startDay: 11,
                    endDay: 11,
                    month: 'April',
                    name: 'World Impact Day—for Distribution of Missionary Book',
                    department: 'Mission',
                    venue: 'Local church'
                },
                {
                    startDay: 18,
                    endDay: 18,
                    month: 'April',
                    name: 'Possibility Ministries Day',
                    department: 'Possibility Ministries',
                    venue: 'Local church'
                }
            ],
            may: [
                {
                    startDay: 2,
                    endDay: 30,
                    month: 'May',
                    name: 'Drug Awareness Month',
                    department: 'Health Ministries',
                    venue: 'Local church'
                },
                {
                    startDay: 2,
                    endDay: 2,
                    month: 'May',
                    name: 'Reach the World: Using Communication Channels',
                    department: 'Communication',
                    venue: 'Local church'
                },
                {
                    startDay: 16,
                    endDay: 16,
                    month: 'May',
                    name: 'Global Adventurer\'s Day',
                    department: 'Youth Ministries',
                    venue: 'Local church'
                },
                {
                    startDay: 23,
                    endDay: 23,
                    month: 'May',
                    name: 'World Day of Prayer for Children at Risk',
                    department: 'Children\'s Ministries',
                    venue: 'Local church'
                }
            ],
            june: [
                {
                    startDay: 6,
                    endDay: 6,
                    month: 'June',
                    name: 'Reach the World: Bible Study: Sabbath School and Correspondence Courses',
                    department: 'Sabbath School',
                    venue: 'Local church'
                },
                {
                    startDay: 13,
                    endDay: 13,
                    month: 'June',
                    name: 'Women\'s Ministries Emphasis Day',
                    department: 'Women\'s Ministries',
                    venue: 'Local church'
                },
                {
                    startDay: 20,
                    endDay: 20,
                    month: 'June',
                    name: 'Reach the World: Nurturing Other Members and Reclaiming',
                    department: 'Sabbath School',
                    venue: 'Local church'
                },
                {
                    startDay: 20,
                    endDay: 20,
                    month: 'June',
                    name: 'Adventist Church World Refugee Day',
                    department: 'ADRA',
                    venue: 'Local church'
                },
                {
                    startDay: 27,
                    endDay: 27,
                    month: 'June',
                    name: 'World Public Campus Ministries Day',
                    department: 'Youth Ministries',
                    venue: 'Local church'
                }
            ]
        },
        quarter3: {
            july: [
                {
                    startDay: 4,
                    endDay: 4,
                    month: 'July',
                    name: 'Quarterly Day of Prayer',
                    department: 'Spiritual Development',
                    venue: 'Local church'
                },
                {
                    startDay: 11,
                    endDay: 11,
                    month: 'July',
                    name: 'Mission Promotion: World Mission',
                    department: 'Mission',
                    venue: 'Local church'
                },
                {
                    startDay: 18,
                    endDay: 18,
                    month: 'July',
                    name: 'Reach the World: Media Ministry',
                    department: 'Communication',
                    venue: 'Local church'
                },
                {
                    startDay: 25,
                    endDay: 25,
                    month: 'July',
                    name: 'Children\'s Sabbath',
                    department: 'Children\'s Ministries',
                    venue: 'Local church'
                }
            ],
            august: [
                {
                    startDay: 1,
                    endDay: 1,
                    month: 'August',
                    name: 'Global Mission Evangelism',
                    department: 'Mission',
                    venue: 'Local church'
                },
                {
                    startDay: 8,
                    endDay: 8,
                    month: 'August',
                    name: 'Reach the World: Church Planting',
                    department: 'Mission',
                    venue: 'Local church'
                },
                {
                    startDay: 15,
                    endDay: 15,
                    month: 'August',
                    name: 'Education Day',
                    department: 'Education',
                    venue: 'Local church'
                },
                {
                    startDay: 22,
                    endDay: 22,
                    month: 'August',
                    name: 'enditnow Day',
                    department: 'Women\'s Ministries',
                    venue: 'Local church'
                },
                {
                    startDay: 22,
                    endDay: 22,
                    month: 'August',
                    name: 'Lay Evangelism',
                    department: 'Mission',
                    venue: 'Local church'
                }
            ],
            september: [
                {
                    startDay: 5,
                    endDay: 5,
                    month: 'September',
                    name: 'Youth Spiritual and Mission Commitment Day',
                    department: 'Youth Ministries',
                    venue: 'Local church'
                },
                {
                    startDay: 6,
                    endDay: 12,
                    month: 'September',
                    name: 'Family Togetherness Week of Prayer',
                    department: 'Family Ministries',
                    venue: 'Local church'
                },
                {
                    startDay: 12,
                    endDay: 12,
                    month: 'September',
                    name: 'Family Togetherness Day of Prayer',
                    department: 'Family Ministries',
                    venue: 'Local church'
                },
                {
                    startDay: 12,
                    endDay: 12,
                    month: 'September',
                    name: 'Mission Promotion: Unusual Opportunities',
                    department: 'Mission',
                    venue: 'Local church'
                },
                {
                    startDay: 19,
                    endDay: 19,
                    month: 'September',
                    name: 'Pathfinder Day',
                    department: 'Youth Ministries',
                    venue: 'Local church'
                },
                {
                    startDay: 26,
                    endDay: 26,
                    month: 'September',
                    name: 'Sabbath School Guest Day',
                    department: 'Sabbath School',
                    venue: 'Local church'
                }
            ]
        },
        quarter4: {
            october: [
                {
                    startDay: 2,
                    endDay: 2,
                    month: 'October',
                    name: 'Quarterly Day of Prayer',
                    department: 'Spiritual Development',
                    venue: 'Local church'
                },
                {
                    startDay: 2,
                    endDay: 2,
                    month: 'October',
                    name: 'Adventist Review Subscription Promotion',
                    department: 'Communication',
                    venue: 'Local church'
                },
                {
                    startDay: 9,
                    endDay: 9,
                    month: 'October',
                    name: 'Pastor Appreciation Day',
                    department: 'Ministry',
                    venue: 'Local church'
                },
                {
                    startDay: 16,
                    endDay: 16,
                    month: 'October',
                    name: 'Spirit of Prophecy and Adventist Heritage',
                    department: 'Education',
                    venue: 'Local church'
                },
                {
                    startDay: 23,
                    endDay: 23,
                    month: 'October',
                    name: 'Creation Sabbath',
                    department: 'Education',
                    venue: 'Local church'
                }
            ],
            november: [
                {
                    startDay: 6,
                    endDay: 13,
                    month: 'November',
                    name: 'Week of Prayer',
                    department: 'Spiritual Development',
                    venue: 'Local church'
                },
                {
                    startDay: 13,
                    endDay: 19,
                    month: 'November',
                    name: 'e-Week of Prayer for Youth and Young Adults',
                    department: 'Youth Ministries',
                    venue: 'Local church'
                },
                {
                    startDay: 13,
                    endDay: 13,
                    month: 'November',
                    name: 'Mission Promotion: Annual Sacrifice',
                    department: 'Mission',
                    venue: 'Local church'
                },
                {
                    startDay: 20,
                    endDay: 20,
                    month: 'November',
                    name: 'World Orphans-Vulnerable Children Day',
                    department: 'Children\'s Ministries',
                    venue: 'Local church'
                },
                {
                    startDay: 27,
                    endDay: 27,
                    month: 'November',
                    name: 'HIV/AIDS Awareness',
                    department: 'Health Ministries',
                    venue: 'Local church'
                },
                {
                    startDay: 27,
                    endDay: 4,
                    month: 'November',
                    name: 'Stewardship Revival Week',
                    department: 'Stewardship',
                    venue: 'Local church'
                }
            ],
            december: [
                {
                    startDay: 4,
                    endDay: 4,
                    month: 'December',
                    name: 'Annual Stewardship Sabbath',
                    department: 'Stewardship',
                    venue: 'Local church'
                },
                {
                    startDay: 11,
                    endDay: 11,
                    month: 'December',
                    name: 'Health Emphasis',
                    department: 'Health Ministries',
                    venue: 'Local church'
                }
            ]
        }
    },
    '2027': {
        quarter1: {
            january: [
                {
                    startDay: 2,
                    endDay: 2,
                    month: 'January',
                    name: 'Quarterly Day of Prayer',
                    department: 'General',
                    venue: 'Local church'
                },
                {
                    startDay: 6,
                    endDay: 16,
                    month: 'January',
                    name: 'Ten Days of Prayer',
                    department: 'General',
                    venue: 'Local church'
                },
                {
                    startDay: 9,
                    endDay: 9,
                    month: 'January',
                    name: 'Health Ministries',
                    department: 'Health',
                    venue: 'Local church'
                },
                {
                    startDay: 16,
                    endDay: 16,
                    month: 'January',
                    name: 'Religious Liberty Day',
                    department: 'Religious Liberty',
                    venue: 'Local church'
                }
            ],
            february: [
                {
                    startDay: 6,
                    endDay: 6,
                    month: 'February',
                    name: 'Reach the World: Personal Outreach',
                    department: 'Sabbath School and Personal Ministries',
                    venue: 'Local church'
                },
                {
                    startDay: 13,
                    endDay: 20,
                    month: 'February',
                    name: 'Christian Home and Marriage Week',
                    department: 'Family Ministries',
                    venue: 'Local church'
                }
            ],
            march: [
                {
                    startDay: 6,
                    endDay: 6,
                    month: 'March',
                    name: 'Women\'s Day of Prayer',
                    department: 'Women\'s Ministries',
                    venue: 'Local church'
                },
                {
                    startDay: 13,
                    endDay: 13,
                    month: 'March',
                    name: 'Adventist World Radio',
                    department: 'Communication',
                    venue: 'Local church'
                },
                {
                    startDay: 20,
                    endDay: 27,
                    month: 'March',
                    name: 'Youth Week of Prayer',
                    department: 'Youth Ministries',
                    venue: 'Local church'
                },
                {
                    startDay: 20,
                    endDay: 20,
                    month: 'March',
                    name: 'Global Youth Day',
                    department: 'Youth Ministries',
                    venue: 'Local church'
                },
                {
                    startDay: 20,
                    endDay: 20,
                    month: 'March',
                    name: 'Global Children\'s Day',
                    department: 'Children\'s Ministries',
                    venue: 'Local church'
                },
                {
                    startDay: 27,
                    endDay: 27,
                    month: 'March',
                    name: 'Christian Education',
                    department: 'Education',
                    venue: 'Local church'
                }
            ]
        },
        quarter2: {
            april: [
                {
                    startDay: 3,
                    endDay: 3,
                    month: 'April',
                    name: 'Quarterly Day of Prayer',
                    department: 'Spiritual Development',
                    venue: 'Local church'
                },
                {
                    startDay: 3,
                    endDay: 3,
                    month: 'April',
                    name: 'World Ambassador Day',
                    department: 'Youth Ministries',
                    venue: 'Local church'
                },
                {
                    startDay: 10,
                    endDay: 16,
                    month: 'April',
                    name: 'Literature Evangelism Rally Week',
                    department: 'Publishing',
                    venue: 'Local church'
                },
                {
                    startDay: 10,
                    endDay: 10,
                    month: 'April',
                    name: 'Friends of Hope Day (Visitor\'s Day)',
                    department: 'Sabbath School and Personal Ministries',
                    venue: 'Local church'
                },
                {
                    startDay: 10,
                    endDay: 10,
                    month: 'April',
                    name: 'Hope Channel International',
                    department: 'Communication',
                    venue: 'Local church'
                },
                {
                    startDay: 10,
                    endDay: 10,
                    month: 'April',
                    name: 'World Impact Day—for Distribution of Missionary Book',
                    department: 'Mission',
                    venue: 'Local church'
                },
                {
                    startDay: 17,
                    endDay: 17,
                    month: 'April',
                    name: 'Possibility Ministries Day',
                    department: 'Possibility Ministries',
                    venue: 'Local church'
                }
            ],
            may: [
                {
                    startDay: 1,
                    endDay: 29,
                    month: 'May',
                    name: 'Drug Awareness Month',
                    department: 'Health Ministries',
                    venue: 'Local church'
                },
                {
                    startDay: 1,
                    endDay: 1,
                    month: 'May',
                    name: 'Reach the World: Using Communication Channels',
                    department: 'Communication',
                    venue: 'Local church'
                },
                {
                    startDay: 15,
                    endDay: 15,
                    month: 'May',
                    name: 'Global Adventurer\'s Day',
                    department: 'Youth Ministries',
                    venue: 'Local church'
                },
                {
                    startDay: 22,
                    endDay: 22,
                    month: 'May',
                    name: 'World Day of Prayer for Children at Risk',
                    department: 'Children\'s Ministries',
                    venue: 'Local church'
                }
            ],
            june: [
                {
                    startDay: 5,
                    endDay: 5,
                    month: 'June',
                    name: 'Reach the World: Bible Study: Sabbath School and Correspondence Courses',
                    department: 'Sabbath School',
                    venue: 'Local church'
                },
                {
                    startDay: 12,
                    endDay: 12,
                    month: 'June',
                    name: 'Women\'s Ministries Emphasis Day',
                    department: 'Women\'s Ministries',
                    venue: 'Local church'
                },
                {
                    startDay: 19,
                    endDay: 19,
                    month: 'June',
                    name: 'Reach the World: Nurturing Other Members and Reclaiming',
                    department: 'Sabbath School',
                    venue: 'Local church'
                },
                {
                    startDay: 19,
                    endDay: 19,
                    month: 'June',
                    name: 'Adventist Church World Refugee Day',
                    department: 'ADRA',
                    venue: 'Local church'
                },
                {
                    startDay: 26,
                    endDay: 26,
                    month: 'June',
                    name: 'World Public Campus Ministries Day',
                    department: 'Youth Ministries',
                    venue: 'Local church'
                }
            ]
        },
        quarter3: {
            july: [
                {
                    startDay: 3,
                    endDay: 3,
                    month: 'July',
                    name: 'Quarterly Day of Prayer',
                    department: 'Spiritual Development',
                    venue: 'Local church'
                },
                {
                    startDay: 10,
                    endDay: 10,
                    month: 'July',
                    name: 'Mission Promotion: World Mission',
                    department: 'Mission',
                    venue: 'Local church'
                },
                {
                    startDay: 17,
                    endDay: 17,
                    month: 'July',
                    name: 'Reach the World: Media Ministry',
                    department: 'Communication',
                    venue: 'Local church'
                },
                {
                    startDay: 24,
                    endDay: 24,
                    month: 'July',
                    name: 'Children\'s Sabbath',
                    department: 'Children\'s Ministries',
                    venue: 'Local church'
                }
            ],
            august: [
                {
                    startDay: 7,
                    endDay: 7,
                    month: 'August',
                    name: 'Global Mission Evangelism',
                    department: 'Mission',
                    venue: 'Local church'
                },
                {
                    startDay: 14,
                    endDay: 14,
                    month: 'August',
                    name: 'Reach the World: Church Planting',
                    department: 'Mission',
                    venue: 'Local church'
                },
                {
                    startDay: 21,
                    endDay: 21,
                    month: 'August',
                    name: 'Education Day',
                    department: 'Education',
                    venue: 'Local church'
                },
                {
                    startDay: 28,
                    endDay: 28,
                    month: 'August',
                    name: 'enditnow Day',
                    department: 'Women\'s Ministries',
                    venue: 'Local church'
                },
                {
                    startDay: 28,
                    endDay: 28,
                    month: 'August',
                    name: 'Lay Evangelism',
                    department: 'Mission',
                    venue: 'Local church'
                }
            ],
            september: [
                {
                    startDay: 4,
                    endDay: 4,
                    month: 'September',
                    name: 'Youth Spiritual and Mission Commitment Day',
                    department: 'Youth Ministries',
                    venue: 'Local church'
                },
                {
                    startDay: 5,
                    endDay: 11,
                    month: 'September',
                    name: 'Family Togetherness Week of Prayer',
                    department: 'Family Ministries',
                    venue: 'Local church'
                },
                {
                    startDay: 11,
                    endDay: 11,
                    month: 'September',
                    name: 'Family Togetherness Day of Prayer',
                    department: 'Family Ministries',
                    venue: 'Local church'
                },
                {
                    startDay: 11,
                    endDay: 11,
                    month: 'September',
                    name: 'Mission Promotion: Unusual Opportunities',
                    department: 'Mission',
                    venue: 'Local church'
                },
                {
                    startDay: 18,
                    endDay: 18,
                    month: 'September',
                    name: 'Pathfinder Day',
                    department: 'Youth Ministries',
                    venue: 'Local church'
                },
                {
                    startDay: 25,
                    endDay: 25,
                    month: 'September',
                    name: 'Sabbath School Guest Day',
                    department: 'Sabbath School',
                    venue: 'Local church'
                }
            ]
        },
        quarter4: {
            october: [
                {
                    startDay: 2,
                    endDay: 2,
                    month: 'October',
                    name: 'Quarterly Day of Prayer',
                    department: 'Spiritual Development',
                    venue: 'Local church'
                },
                {
                    startDay: 2,
                    endDay: 2,
                    month: 'October',
                    name: 'Adventist Review Subscription Promotion',
                    department: 'Communication',
                    venue: 'Local church'
                },
                {
                    startDay: 9,
                    endDay: 9,
                    month: 'October',
                    name: 'Pastor Appreciation Day',
                    department: 'Ministry',
                    venue: 'Local church'
                },
                {
                    startDay: 16,
                    endDay: 16,
                    month: 'October',
                    name: 'Spirit of Prophecy and Adventist Heritage',
                    department: 'Education',
                    venue: 'Local church'
                },
                {
                    startDay: 23,
                    endDay: 23,
                    month: 'October',
                    name: 'Creation Sabbath',
                    department: 'Education',
                    venue: 'Local church'
                }
            ],
            november: [
                {
                    startDay: 6,
                    endDay: 13,
                    month: 'November',
                    name: 'Week of Prayer',
                    department: 'Spiritual Development',
                    venue: 'Local church'
                },
                {
                    startDay: 13,
                    endDay: 19,
                    month: 'November',
                    name: 'e-Week of Prayer for Youth and Young Adults',
                    department: 'Youth Ministries',
                    venue: 'Local church'
                },
                {
                    startDay: 13,
                    endDay: 13,
                    month: 'November',
                    name: 'Mission Promotion: Annual Sacrifice',
                    department: 'Mission',
                    venue: 'Local church'
                },
                {
                    startDay: 20,
                    endDay: 20,
                    month: 'November',
                    name: 'World Orphans-Vulnerable Children Day',
                    department: 'Children\'s Ministries',
                    venue: 'Local church'
                },
                {
                    startDay: 27,
                    endDay: 27,
                    month: 'November',
                    name: 'HIV/AIDS Awareness',
                    department: 'Health Ministries',
                    venue: 'Local church'
                },
                {
                    startDay: 27,
                    endDay: 4,
                    month: 'November',
                    name: 'Stewardship Revival Week',
                    department: 'Stewardship',
                    venue: 'Local church'
                }
            ],
            december: [
                {
                    startDay: 4,
                    endDay: 4,
                    month: 'December',
                    name: 'Annual Stewardship Sabbath',
                    department: 'Stewardship',
                    venue: 'Local church'
                },
                {
                    startDay: 11,
                    endDay: 11,
                    month: 'December',
                    name: 'Health Emphasis',
                    department: 'Health Ministries',
                    venue: 'Local church'
                }
            ]
        }
    }
};

// Function to get current quarter
function getCurrentQuarter() {
    const month = new Date().getMonth() + 1; // JavaScript months are 0-based
    if (month >= 1 && month <= 3) return 1;
    if (month >= 4 && month <= 6) return 2;
    if (month >= 7 && month <= 9) return 3;
    return 4;
}

// Function to set current quarter
function setCurrentQuarter() {
    const currentQuarter = getCurrentQuarter();
    console.log('Setting current quarter:', currentQuarter);
    
    // Remove active class from all quarter tabs and sections
    document.querySelectorAll('.quarter-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    document.querySelectorAll('.quarter-events').forEach(section => {
        section.classList.remove('active');
    });
    
    // Set current quarter as active
    const currentQuarterTab = document.querySelector(`.quarter-tab[data-quarter="${currentQuarter}"]`);
    const currentQuarterSection = document.getElementById(`quarter-${currentQuarter}`);
    
    if (currentQuarterTab && currentQuarterSection) {
        currentQuarterTab.classList.add('active');
        currentQuarterSection.classList.add('active');
        console.log('Successfully set quarter', currentQuarter, 'as active');
    } else {
        console.log('Failed to find elements for quarter', currentQuarter);
    }
}

// Function to update events for a specific year
function updateEventsForYear(year) {
    console.log('Updating events for year:', year);
    
    // Clear existing events
    document.querySelectorAll('.quarter-events').forEach(section => {
        section.innerHTML = '';
        section.classList.remove('active');
    });
    
    // Reset quarter tabs
    document.querySelectorAll('.quarter-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    
    // Get events data for the selected year
    const yearData = eventsData[year];
    if (!yearData) {
        console.log('No data found for year:', year);
        return;
    }
    
    // Populate events for each quarter
    Object.keys(yearData).forEach(quarter => {
        const quarterSection = document.getElementById(`quarter-${quarter.split('quarter')[1]}`);
        if (!quarterSection) {
            console.log('Quarter section not found:', quarter);
            return;
        }
        
        // Create month sections
        const months = ['january', 'february', 'march', 'april', 'may', 'june', 
                       'july', 'august', 'september', 'october', 'november', 'december'];
        
        months.forEach(month => {
            if (yearData[quarter][month]) {
                const monthSection = document.createElement('div');
                monthSection.className = 'month-section';
                monthSection.dataset.month = getMonthNumber(month);
                
                const monthHeader = document.createElement('h2');
                monthHeader.textContent = month.charAt(0).toUpperCase() + month.slice(1);
                monthSection.appendChild(monthHeader);
                
                const eventsGrid = document.createElement('div');
                eventsGrid.className = 'events-grid';
                
                // Add events for this month
                yearData[quarter][month].forEach(event => {
                    const eventCard = createEventCard(event);
                    eventsGrid.appendChild(eventCard);
                });
                
                monthSection.appendChild(eventsGrid);
                quarterSection.appendChild(monthSection);
            }
        });
    });
    
    // Set current quarter as active only if viewing current year
    const currentYear = new Date().getFullYear();
    if (year === currentYear.toString()) {
        console.log('Setting current quarter for current year');
        setCurrentQuarter();
    } else {
        console.log('Setting first quarter for year:', year);
        // For other years, show first quarter by default
        const firstQuarterTab = document.querySelector('.quarter-tab[data-quarter="1"]');
        const firstQuarterSection = document.getElementById('quarter-1');
        
        if (firstQuarterTab && firstQuarterSection) {
            firstQuarterTab.classList.add('active');
            firstQuarterSection.classList.add('active');
        }
    }
}

// Function to create an event card
function createEventCard(event) {
    const card = document.createElement('div');
    card.className = 'event-card';
    
    const dateDisplay = event.startDay === event.endDay ? 
        `<span class="day">${event.startDay}</span>` :
        `<span class="day">${event.startDay}-${event.endDay}</span>`;
    
    card.innerHTML = `
        <div class="event-date">
            ${dateDisplay}
            <span class="month">${event.month}</span>
        </div>
        <div class="event-details">
            <h3>${event.name}</h3>
            <p class="department">${event.department}</p>
            <p class="venue"><i class="fas fa-map-marker-alt"></i> ${event.venue}</p>
        </div>
    `;
    
    return card;
}

// Function to update upcoming event
function updateUpcomingEvent() {
    const upcomingTitle = document.getElementById('upcoming-title');
    const upcomingDepartment = document.getElementById('upcoming-department');
    const upcomingVenue = document.getElementById('upcoming-venue');
    const upcomingStartDay = document.getElementById('upcoming-start-day');
    const upcomingStartMonth = document.getElementById('upcoming-start-month');
    const upcomingEndDay = document.getElementById('upcoming-end-day');
    const upcomingEndMonth = document.getElementById('upcoming-end-month');
    const dateSeparator = document.getElementById('date-separator');

    if (!upcomingTitle || !upcomingDepartment || !upcomingVenue || 
        !upcomingStartDay || !upcomingStartMonth || !upcomingEndDay || 
        !upcomingEndMonth || !dateSeparator) return;

    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0); // Set to start of day for accurate comparison
    let nextEvent = null;
    let nextEventDate = null;

    // Always use current year for upcoming events
    const currentYear = new Date().getFullYear();
    
    // Check events in the current year
    const yearData = eventsData[currentYear];
    if (yearData) {
        Object.keys(yearData).forEach(quarter => {
            Object.keys(yearData[quarter]).forEach(month => {
                yearData[quarter][month].forEach(event => {
                    const eventMonth = getMonthNumber(event.month) - 1; // Convert to 0-based month
                    const eventDay = parseInt(event.startDay);
                    
                    // Create date object for event
                    const eventDate = new Date(currentYear, eventMonth, eventDay);
                    eventDate.setHours(0, 0, 0, 0); // Set to start of day for accurate comparison
                    
                    // Only consider future events
                    if (eventDate >= currentDate) {
                        if (!nextEventDate || eventDate < nextEventDate) {
                            nextEvent = event;
                            nextEventDate = eventDate;
                        }
                    }
                });
            });
        });
    }

    // If no future events found in current year, check next year
    if (!nextEvent) {
        const nextYearData = eventsData[currentYear + 1];
        if (nextYearData) {
            Object.keys(nextYearData).forEach(quarter => {
                Object.keys(nextYearData[quarter]).forEach(month => {
                    nextYearData[quarter][month].forEach(event => {
                        const eventMonth = getMonthNumber(event.month) - 1;
                        const eventDay = parseInt(event.startDay);
                        
                        const eventDate = new Date(currentYear + 1, eventMonth, eventDay);
                        eventDate.setHours(0, 0, 0, 0);
                        
                        if (!nextEventDate || eventDate < nextEventDate) {
                            nextEvent = event;
                            nextEventDate = eventDate;
                        }
                    });
                });
            });
        }
    }

    if (nextEvent) {
        // Update event details
        upcomingTitle.textContent = nextEvent.name;
        upcomingDepartment.textContent = nextEvent.department;
        upcomingVenue.textContent = nextEvent.venue;
        
        // Update date display
        upcomingStartDay.textContent = nextEvent.startDay;
        upcomingStartMonth.textContent = nextEvent.month;
        
        // Handle multi-day events
        if (nextEvent.startDay !== nextEvent.endDay) {
            dateSeparator.style.display = 'inline';
            upcomingEndDay.style.display = 'inline';
            upcomingEndMonth.style.display = 'inline';
            upcomingEndDay.textContent = nextEvent.endDay;
            upcomingEndMonth.textContent = nextEvent.month;
        } else {
            dateSeparator.style.display = 'none';
            upcomingEndDay.style.display = 'none';
            upcomingEndMonth.style.display = 'none';
        }
    } else {
        // Show "No upcoming events" message
        upcomingTitle.textContent = 'No upcoming events';
        upcomingDepartment.textContent = 'Check back later for new events';
        upcomingVenue.textContent = '';
        upcomingStartDay.textContent = '--';
        upcomingStartMonth.textContent = '---';
        dateSeparator.style.display = 'none';
        upcomingEndDay.style.display = 'none';
        upcomingEndMonth.style.display = 'none';
    }
}

// Helper function to convert month name to number
function getMonthNumber(monthName) {
    const months = {
        'january': 1, 'february': 2, 'march': 3, 'april': 4,
        'may': 5, 'june': 6, 'july': 7, 'august': 8,
        'september': 9, 'october': 10, 'november': 11, 'december': 12
    };
    return months[monthName.toLowerCase()];
}

// Initialize everything when the DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM Content Loaded');
    
    // Set current year and next years in tabs
    const yearTabs = document.querySelectorAll('.year-tab');
    const currentYear = new Date().getFullYear();
    console.log('Current year:', currentYear);
    
    yearTabs[0].textContent = currentYear;
    yearTabs[0].dataset.year = currentYear;
    yearTabs[1].textContent = currentYear + 1;
    yearTabs[1].dataset.year = currentYear + 1;
    yearTabs[2].textContent = currentYear + 2;
    yearTabs[2].dataset.year = currentYear + 2;
    
    // Add click handlers for year tabs
    yearTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            yearTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            updateEventsForYear(this.dataset.year);
        });
    });
    
    // Set current year as active by default
    yearTabs[0].classList.add('active');
    
    // Initialize quarter tabs
    const quarterTabs = document.querySelectorAll('.quarter-tab');
    quarterTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            quarterTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            const quarterId = `quarter-${this.dataset.quarter}`;
            document.querySelectorAll('.quarter-events').forEach(section => {
                section.classList.remove('active');
            });
            document.getElementById(quarterId).classList.add('active');
        });
    });
    
    // Initialize month filter
    const monthFilter = document.getElementById('month-filter');
    monthFilter.addEventListener('change', function() {
        const selectedMonth = this.value;
        document.querySelectorAll('.month-section').forEach(section => {
            if (selectedMonth === 'all' || section.dataset.month === selectedMonth) {
                section.style.display = 'block';
            } else {
                section.style.display = 'none';
            }
        });
    });
    
    // Initialize search functionality
    const searchInput = document.getElementById('event-search');
    const searchButton = document.getElementById('search-btn');
    
    function performSearch() {
        const searchTerm = searchInput.value.toLowerCase();
        const activeYear = document.querySelector('.year-tab.active').dataset.year;
        const events = document.querySelectorAll('.event-card');
        
        events.forEach(event => {
            const eventName = event.querySelector('h3').textContent.toLowerCase();
            const eventDepartment = event.querySelector('.department').textContent.toLowerCase();
            const eventVenue = event.querySelector('.venue').textContent.toLowerCase();
            
            if (eventName.includes(searchTerm) || 
                eventDepartment.includes(searchTerm) || 
                eventVenue.includes(searchTerm)) {
                event.style.display = 'block';
            } else {
                event.style.display = 'none';
            }
        });
    }
    
    searchButton.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
    
    // Initialize with current year's events first
    console.log('Initializing with current year events');
    updateEventsForYear(currentYear);
    
    // Initialize upcoming event
    updateUpcomingEvent();
}); 