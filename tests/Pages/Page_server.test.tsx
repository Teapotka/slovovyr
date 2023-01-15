import {screen} from "@testing-library/dom";
import {render} from "@testing-library/react";
import Server from "../../pages/server";
import {Provider} from "react-redux";
import {store} from "../../redux/store";

jest.mock("next/router", () => ({
    useRouter() {
        return {
            route: "",
            pathname: "",
            query: "",
            asPath: "",
            push: () => {
            }
        };
    },
}));
describe('Server Page', () => {
    test('should render', async () => {
        render(
            <Provider store={store}>
                <Server/>
            </Provider>
        )
        const component = await screen.findByTestId('gridComponent')
        expect(component).toBeInTheDocument()
        expect(component.children.length).toBe(2)
    })
})