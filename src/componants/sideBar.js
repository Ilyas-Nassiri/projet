import CardUser from "./card-user";
import CustomButton from "./custom-button";
const SideBar = () => {
    return (
        <aside class="fixed left-0 top-20 h-screen bg-white shadow-xl w-72">
        <CardUser />
        <CustomButton icon='icon' text='text' />
        </aside>
    );
}

export default SideBar;