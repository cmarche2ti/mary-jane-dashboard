
var config = {
    type: 'doughnut',
    data: {
        datasets: [{
            data: [1,24,2,1,3,26,3,1,628,28,4,77,49,1,1,3,82,18,9,2,1,6,4,24,2,1,3,1,1,1,1,1,3,7,1,2,1,10,21,2,1,29,83,1,1,22,26,5,81,2,39,2,20,1,2
            ],
                backgroundColor: [
                    "#408000","#99ffbb","#8cff1a","#86b300","#b3ff66","#aaff00","#a6ff4d","#d9ffb3",
                    "#00ff55","#b3ff1a","#bbff33","#f2ffe6","#80ffaa","#ccffdd","#00e64d","#40bf80","#dfff80",
                    "#e6ffee","#339966","#53c68c","#77b300","#4dff88","#e6ff99","#73e600","#ace600","#d2ff4d",
                    "#336600","#bfff80","#b3ffcc","#d5ff80","#2d8659","#264d00","#ccff99","#00b33c","#ccff33",
                    "#66cc99","#99ff33","#26734d","#79d2a6","#59b300","#009933","#88cc00","#8cd9b3","#e6ffcc",
                    "#e6ffb3","#c4ff4d","#1aff66","#9fdfbf","#bfff00","#33ff77","#ccff66","#66cc00","#80ff00",
                    "#66ff99","#ddff99","#00cc44","#d9ff66","#c6ff1a","#99e600","#4d9900","#99cc00"],
        }, {
            data: [31,87,5,787,85,38,145,21,115,29,26,2
            ],
                backgroundColor: ["#90EE90","#20B2AA","#00FF00","#00FA9A","#2E8B57","#9ACD32","#7FFF00","#006400","#8FBC8F","#008000","#ADFF2F","#7CFC00"],
        }, {
            data: [
                1146,
                515568,
            ],
                backgroundColor: [
                "lime",
                "black"
            ],
        }],
        labels: [
            "Marijuana Crimes", "Other Crimes", "Aggravated Assault","Non-Violent Crimes","Auto Theft","Burglary","Criminal Mischief","Drug Offenses",
            "Larceny","Robbery - Business","Robbery - Street Residence","Simple Assault","Theft from Motor Vehicle","Weapons Offense",
            "Accessory/Conspiracy to Crime","Aggravated Assault","Arson - Business","Arson - Residence","Assault - Dv","Assault - Simple",
            "Burg/Auto Theft-Busn W/ Force","Burg/Auto Theft-Resd No Force","Burglary - Business By Force","Burglary - Business No Force",
            "Burglary - Poss. Of Tools","Burglary - Residence By Force","Burglary - Residence No Force","Burglary - Safe","Burglary - Vending Machine",
            "Criminal Mischief - Mtr Veh","Criminal Mischief - Other","Criminal Trespassing","Disturbing The Peace","Drug - Cocaine Possess","Drug - Fraud To Obtain",
            "Drug - Marijuana Cultivation","Drug - Marijuana Possess","Drug - Marijuana Sell","Drug - Pcs - Other Drug","Forgery - Counterfeit of Obj","Forgery - Other",
            "Forgery - Poss Of Forged Inst","Forgery - Poss. Of Forged Ftd","Forgery - Posses Forge Device","Fraud - By Use of Computer","Harassment",
            "Kidnap - Adult Victim","Menacing - Felony W/Weap","Police - False Information","Police - Resisting Arrest","Property Crimes Other","Public Order Crimes - Other",
            "Robbery - Business","Robbery - Car Jacking","Robbery - Purse Snatch W/Force","Robbery - Residence","Robbery - Street","Theft - Confidence Game","Theft - Embezzle",
            "Theft - From Bldg","Theft - Items from Vehicle","Theft - Of Motor Vehicle","Theft - Other","Theft - Purse Snatch No Force","Theft - Shoplift","Theft - Unauth Use of Ftd",
            "Threats to Injure","Violation of Court Order","Weapon- Unlawful Discharge Of"
        ]
    },
    options: {
        responsive: true,
        title: {
            display: true,
            text: 'Crime Summary and Comparison',
            position: "top"
        }
    }
};

var ctx = document.getElementById("chart-area").getContext("2d");
var myDoughnut = new Chart(ctx, config);
