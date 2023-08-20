const SPORTS = [
	['🤺','fencing'],
	['⛸','figure skating'],
	['⛷','skier'],
	['🏂','snowboarder'],
	['🏌','golfing'],
	['🚣','rowing boat'],
	['🏊','swimming'],
	['🤸','gymnastics'],
	['🤾','handball']
];

const WINNERS = [
	['fencing','gold','fr'],
	['fencing','silver','it'],
	['fencing','bronze','us'],

	['figure skating','gold','ca'],
	['figure skating','silver','pl'],
	['figure skating','bronze','us'],

	['skier','gold','no'],
	['skier','silver','pl'],
	['skier','bronze','fr'],

	['snowboarder','gold','us'],
	['snowboarder','silver','jp'],
	['snowboarder','bronze','au'],

	['golfing','gold','gb'],
	['golfing','silver','se'],
	['golfing','bronze','us'],

	['rowing boat','gold','us'],
	['rowing boat','silver','gb'],
	['rowing boat','bronze','ro'],

	['swimming','gold','us'],
	['swimming','silver','gb'],
	['swimming','bronze','au'],

	['gymnastics','gold','pl'],
	['gymnastics','silver','pl'],
	['gymnastics','bronze','ua'],

	['handball','gold','dk'],
	['handball','silver','fr'],
	['handball','bronze','de'],
];

const RINGS = ['🔵','⚫','🔴','🟡','🟢'];
// Europe — 🔵, Africa — ⚫, America — 🔴, Asia — 🟡, Oceania — 🟢

const MEDALS = [
	['🥇','gold'],
	['🥈','silver'],
	['🥉','bronze'],
];

const CONTINENTS = [
	['fr','Europe'],
	['it','Europe'],
	['us','America'],
	['ca','America'],
	['pl','Europe'],
	['no','Europe'],
	['jp','Asia'],
	['au','Oceania'],
	['gb','Europe'],
	['se','Europe'],
	['ro','Europe'],
	['ua','Europe'],
	['dk','Europe'],
	['de','Europe']
];

const FLAGS = [
	['fr','🇫🇷'],
	['it','🇮🇹'],
	['us','🇺🇸'],
	['ca','🇨🇦'],
	['pl','🇵🇱'],
	['no','🇳🇴'],
	['jp','🇯🇵'],
	['au','🇦🇺'],
	['gb','🇬🇧'],
	['se','🇸🇪'],
	['ro','🇷🇴'],
	['ua','🇺🇦'],
	['dk','🇩🇰'],
	['de','🇩🇪']
];

function renderThead(){
    return `<thead>
        <tr>
            <th></th>
            <th>${RINGS.join(`</th><th>`)}</th>
        </tr>
    </thead>`;
}

function getSportWinners(sport){
	let sportWinners = [];

	for (let i = 0; i < WINNERS.length; i++) {
		let currentWinner = WINNERS[i];
        let currentWinnerSport = currentWinner[0];
		if (currentWinnerSport === sport) sportWinners.push(currentWinner);
	}

	return sportWinners;
}

function getCountryContinent(country) {
	for (let i = 0; i <CONTINENTS.length; i++) {

		let currentCountry = CONTINENTS[i];
		let currentCountryName = currentCountry[0];
		let currentCountryContinent = currentCountry[1];

		if(currentCountryName === country) return currentCountryContinent;
	}
}


function getCountryFlag(country){
    for(let i = 0; i < FLAGS.length; i++){
        let currentCountry = FLAGS[i];

        let currentCountryName = currentCountry[0];
        let currentCountryFlag = currentCountry[1];

        if(currentCountryName === country) return currentCountryFlag;
    }
}

function getMedalIcon(medal){
    for(let i = 0; i < MEDALS.length; i++){
        let currentMedal = MEDALS[i];

        let currentMedalIcon = currentMedal[0];
        let currentMedalName = currentMedal[1];

        if(currentMedalName === medal) return currentMedalIcon;
    }
}

function renderTbody(){
    let TRs = [];
    for(let i = 0; i < SPORTS.length; i++){

        let Europe = [],
            Asia = [],
            Africa = [],
            Oceania = [],
            America = [];

        let sportIcon = SPORTS[i][0];
        let sportName = SPORTS[i][1];

        let currentSportWinners = getSportWinners(sportName);
        for(let i=0; i<currentSportWinners.length; i++){
            let winner = currentSportWinners[i];

            let winnerMedal = winner[1];
            let winnerCountry = winner[2];

            let winnerContinent = getCountryContinent(winnerCountry);
            let winnerCountryFlag = getCountryFlag(winnerCountry);
            let winnerCountryMedal = getMedalIcon(winnerMedal);

            let winnerRender = `<div class="winner ${winnerMedal}">${winnerCountryFlag} – ${winnerCountryMedal}</div>`
            
            switch(winnerContinent){
                case `Europe`:
                    Europe.push(winnerRender);
                    break;
                case `Africa`:
                    Africa.push(winnerRender);
                    break;
                case `America`:
                    America.push(winnerRender);
                    break;
                case `Asia`:
                    Asia.push(winnerRender);
                    break;
                case `Oceania`:
                    Oceania.push(winnerRender);
                    break;
            }
        }

		let tr = `<tr>
            <td>${sportIcon}</td>
            <td>${Europe.join(``)}</td>
            <td>${Africa.join(``)}</td>
            <td>${America.join(``)}</td>
            <td>${Asia.join(``)}</td>
            <td>${Oceania.join(``)}</td>
        </tr>`;
        TRs.push(tr);
    }

    return `<tbody>${TRs.join(``)}</tbody>`;
}

function renderOlympicTable(){
    let table = `<table>
        ${renderThead()}
        ${renderTbody()}
    </table>`;

    return table;
}

document.write(renderOlympicTable());