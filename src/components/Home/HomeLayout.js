import SidebarLayout from "../Sidebar/SidebarLayout";
import HeaderLayout from "../Header/HeaderLayout";
import InsightLayout from "../Insight/InsightLayout";
import styles from "./HomeLayout.module.css";


const HomeLayout = () => {
    return (
        <div className={styles.container}>
            <div className={styles.sidebar}>
                <SidebarLayout />
            </div>
            <div className={styles.main}>
                <HeaderLayout />
                <InsightLayout />
            </div>
        </div>
    );
}

export default HomeLayout;
