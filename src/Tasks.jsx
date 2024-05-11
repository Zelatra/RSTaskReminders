import RuneShops from "./runeShop";
import FeatherShops from "./feathers";
import { DndDaily, DndWeekly, DndMonthly } from "./DnD";

export let funcArr = [
    { 
        component: FeatherShops,
        props: {
            name: 'Feather Shops'
        }
    },
    { 
        component: RuneShops,
        props: {
            name: 'Rune Shops'
        }
    },
    { 
        component: DndDaily,
        props: {
            name: 'D&D Dailies'
        }
    },
    { 
        component: DndWeekly,
        props: {
            name: 'D&D Weeklies'
        }
    },
    { 
        component: DndMonthly,
        props: {
            name: 'D&D Monthlies'
        }
    }
];

export default funcArr;