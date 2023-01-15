import {fireEvent, screen} from "@testing-library/dom";
import {render} from "@testing-library/react";
import Navigation from "../../components/Modules/Navigation";

jest.mock("next/router", () => ({
    useRouter() {
        return {
            route: "",
            pathname: "",
            query: "",
            asPath: "",
            push: ()=>{}
        };
    },
}));

const useRouter = jest.spyOn(require("next/router"), "useRouter");

describe('Navigation Module', ()=>{
    test('should render', async ()=>{
        render(<Navigation className='className text'/>)
        const component = await screen.findByTestId('navigationModule')
        expect(component).toBeInTheDocument()
        expect(component.children.length).toBe(3)
        expect(component.children[0].nodeName).toBe('DIV')
    })
    test('should navigate', async ()=>{
        render(<Navigation className='className text'/>)
        const component = await screen.findByTestId('navigationModule')
        fireEvent.click(component.children[0])
        expect(useRouter).toHaveBeenCalled()
    })
})