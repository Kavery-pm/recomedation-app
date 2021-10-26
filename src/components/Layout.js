import Header from "./header";
import classes from './Layout.module.css';
const Layout = (props)=>{
    return <div>
      <Header></Header>
        <main className={classes.main}>
            {props.children}
        </main>
    </div>
    }
    export default Layout;