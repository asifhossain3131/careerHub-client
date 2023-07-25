import ApplicationTable from "./ApplicationTable";
import Departments from "./Departments";


const Application = () => {
    return (
        <div className="space-y-4 py-4">
            <ApplicationTable></ApplicationTable>
            <Departments></Departments>
        </div>
    );
};

export default Application;