var ganttData = [
	{
		id: 1, name: "Supervisor agreement form", series: [
			{ name: "Planned", start: new Date(2018,09,10), end: new Date(2018,09,17), color: "#ff7256" },
			{ name: "Actual", start: new Date(2018,09,16), end: new Date(2018,09,22), color: "#ff7256" }
		]
	}, 
	{
		id: 2, name: "<br>Project Proposal", series: [
			{ name: "Planned", start: new Date(2018,09,18), end: new Date(2018,09,24), color: "#ff8c69"  },
			{ name: "Actual", start: new Date(2018,09,23), end: new Date(2018,09,26), color: "#ff8c69" },
			//{ name: "Projected", start: new Date(2018,09,31), end: new Date(2018,10,4), color: "#f0f0f0" }
		]
	}, 
	{
		id: 3, name: "Prepare Project Charter & Project Website", series: [
			{ name: "Planned", start: new Date(2018,09,18), end: new Date(2018,09,31), color: "#ffec8b" },
			{ name: "Actual", start: new Date(2018,09,23), end: new Date(2018,09,29), color: "#ffec8b" }
		]
	}, 
	{
		id: 4, name: "Project Assumption 1 (Poster)", series: [
			{ name: "Planned", start: new Date(2018,09,18), end: new Date(2018,09,31), color: "#ffa54f" },
			{ name: "Actual", start: new Date(2018,09,31), end: new Date(2018,10,07), color: "#ffa54f" }
		]
	},
	{
		id: 5, name: "<br>Software Project Plan", series: [
			{ name: "Planned", start: new Date(2018,10,01), end: new Date(2018,10,14), color: "#ffd700" },
			{ name: "Actual", start: new Date(2018,10,13), end: new Date(2018,10,14), color: "#ffd700" }
		]
	}, 
	{
		id: 6, name: "Dessertation Plan And Schedule", series: [
			{ name: "Planned", start: new Date(2018,09,18), end: new Date(2018,10,14), color: "#ff7f24"}
			//{ name: "Actual", start: new Date(2010,00,06), end: new Date(2010,00,17), color: "#f0f0f0" },
			//{ name: "Projected", start: new Date(2010,00,06), end: new Date(2010,00,20), color: "#e0e0e0" }
		]
	}, 
	{
		id: 7, name: "Project Assumption 2", series: [
			{ name: "Planned", start: new Date(2018,10,01), end: new Date(2018,10,14), color: "#b4eeb4" }
		]
	}, 
	{
		id: 8, name: "Process Monitoring And Control Plan", series: [
			{ name: "Planned", start: new Date(2018,10,15), end: new Date(2018,10,28), color: "#8fbc8f" },
			//{ name: "Actual", start: new Date(2010,01,01), end: new Date(2010,01,05), color: "#f0f0f0" }
		]
	}, 
	{
		id: 9, name: "Preliminary Draft(Structure) 1", series: [
			{ name: "Planned", start: new Date(2018,10,08), end: new Date(2018,11,05), color: "#6b8123" }
		]
	},  
	{
		id: 10, name: "Standard Data Format", series: [
			{ name: "Planned", start: new Date(2018,10,15), end: new Date(2018,11,05), color: "#b3dfee" }
		]
	},  
	{
		id: 11, name: "Interim Report Submission", series: [
			{ name: "Planned", start: new Date(2018,10,07), end: new Date(2018,11,13), color: "#87c1ff" }
		]
	},
	{
		id: 12, name: "Framework Design And implementation", series: [
			{ name: "Planned", start: new Date(2018,10,29), end: new Date(2018,11,19), color: "#6495ed" }
		]
	},
	{
		id: 13, name: "Prototype 1/ Rapid Test 1", series: [
			{ name: "Planned", start: new Date(2018,11,13), end: new Date(2018,11,26), color: "#a2b5cd" }
		]
	},
	{
		id: 14, name: "Software Project Plan 2", series: [
			{ name: "Planned", start: new Date(2019,00,03), end: new Date(2019,00,09), color: "#cd96cd" }
		]
	},
	{
		id: 15, name: "Preliminary Draft(Structure) 2", series: [
			{ name: "Planned", start: new Date(2018,11,06), end: new Date(2019,00,16), color: "#9f79ee" }
		]
	},
	{
		id: 16, name: "Generic Software", series: [
			{ name: "Planned", start: new Date(2018,11,27), end: new Date(2019,00,16), color: "#ba55d3" }
		]
	},
	{
		id: 17, name: "Implement Modules", series: [
			{ name: "Planned", start: new Date(2019,00,10), end: new Date(2019,00,30), color: "#8b7d6b" }
		]
	},
	{
		id: 18, name: "Integrate System", series: [
			{ name: "Planned", start: new Date(2019,00,24), end: new Date(2019,01,13), color: "#cdb38b" }
		]
	},
	{
		id: 18, name: "Dissertation Plan And Schedule 2", series: [
			{ name: "Planned", start: new Date(2019,00,17), end: new Date(2019,01,13), color: "#b8860b" }
		]
	},
	{
		id: 18, name: "Prototype 2/ Rapid Test 2", series: [
			{ name: "Planned", start: new Date(2019,01,06), end: new Date(2019,01,20), color: "#8b8682" }
		]
	},
	{
		id: 19, name: "Software Project Plan 3", series: [
			{ name: "Planned", start: new Date(2019,01,21), end: new Date(2019,01,26), color: "#8b4513" }
		]
	},
	{
		id: 20, name: "Demostration", series: [
			{ name: "Planned", start: new Date(2019,01,21), end: new Date(2019,02,06), color: "#8b5a00" }
		]
	},
	{
		id: 21, name: "First Draft", series: [
			{ name: "Planned", start: new Date(2019,01,14), end: new Date(2019,02,27), color: "#bababa" }
		]
	},
	{
		id: 22, name: "Softeware Development", series: [
			{ name: "Planned", start: new Date(2019,02,07), end: new Date(2019,02,27), color: "#adadad" }
		]
	},
	{
		id: 23, name: "Dissertation Submission", series: [
			{ name: "Planned", start: new Date(2019,00,14), end: new Date(2019,03,11), color: "#9ac0cd" }
		]
	},
	{
		id: 24, name: "Demostration Day prepare", series: [
			{ name: "Planned", start: new Date(2019,02,01), end: new Date(2019,03,24), color: "#b0c4de" }
		]
	}
];