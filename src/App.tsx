import { AppProvider } from "@/providers/app";
import { AppRoutes } from "./routes";
import { UserProvider } from "./features/UserProfile/providers/UserProvider";

const App = () => (
    <AppProvider>
        <UserProvider>
            <AppRoutes />
        </UserProvider>
    </AppProvider>
);

export default App;
