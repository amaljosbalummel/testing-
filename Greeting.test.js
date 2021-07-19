import { render,screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting"

describe("greeting component", ()=> {
    test('renders hello as a text', ()=> {
        render(<Greeting/>);
      const helloHandler=  screen.getByText("hello",{exact:false});
      expect(helloHandler).toBeInTheDocument();
    });
    test('renders hai there if the  button was NOT clicked', ()=> {
        render (<Greeting/>);

        const outPutElement=screen.getByText("there",{exact:false})
        expect(outPutElement).toBeInTheDocument();
    });
    test('renders changed if button was clicked',()=>{
        render(<Greeting/>);

        const buttonElement=screen.getByRole('button');
        userEvent.click(buttonElement);

        const outPutElement=screen.getByText('changed',{exact:false});
        expect(outPutElement).toBeInTheDocument();
    })
})

