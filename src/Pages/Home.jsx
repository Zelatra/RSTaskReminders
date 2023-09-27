import FeatherShops from "../feathers"
import RuneShops from '../runeShop';
import {DndDaily, DndWeekly, DndMonthly} from "../DnD";
import '../index.css';
import NavBar from "../Navbar";

function Home() {
    return(
        <div>
            <main>
                <FeatherShops name='Feather Shop Run' />
                <RuneShops name='Rune Shop Run' />
                <DndDaily name='Daily distractions and diversions' />
                <DndWeekly name='Weekly distractions and diversions' />
                <DndMonthly name='Monthly distractions and diversion' />
            </main>
        </div>
    )
}

export default Home;