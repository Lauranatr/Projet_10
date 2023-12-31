import { fireEvent, render, screen } from "@testing-library/react";
import Home from "./index";

describe("When Form is created", () => {
  it("a list of fields card is displayed", async () => {
    render(<Home />);
    await screen.findByText("Email");
    await screen.findByText("Nom");
    await screen.findByText("Prénom");
    await screen.findByText("Personel / Entreprise");
  });

  describe("and a click is triggered on the submit button", () => {
    it("the success message is displayed", async () => {
      render(<Home />);
      fireEvent(
        await screen.findByText("Envoyer"),
        new MouseEvent("click", {
          cancelable: true,
          bubbles: true,
        })
      );
      await screen.findByText("En cours");
      await screen.findByText("Message envoyé !");
    });
  });

});


describe("When a page is created", () => {
  it("a list of events is displayed", () => {
    render(<Home />);
        const eventList = screen.getByTestId("event-list");
        expect(eventList).toBeDefined();
  })
  it("a list a people is displayed", () => {
    render(<Home />);  
    expect(screen.getByRole('heading', { name: 'Notre équipe' })).toBeInTheDocument();

    expect(screen.getByText("Samira")).toBeInTheDocument();
    expect(screen.getByText("Jean-baptiste")).toBeInTheDocument();
  
  })
  it("a footer is displayed", () => {
    render(<Home />);  
    expect(screen.getByText("Contactez-nous")).toBeInTheDocument();
    expect(screen.getByText("45 avenue de la République, 75000 Paris")).toBeInTheDocument();
    expect(screen.getByText("01 23 45 67 89")).toBeInTheDocument();
    expect(screen.getByText("contact@77events.com")).toBeInTheDocument();
    
    const socialMedia = screen.getByTestId("social-media");
    expect(socialMedia).toBeDefined();
  })
  it("an event card, with the last event, is displayed", () => {
    render(<Home />); 
    const lastEvent = screen.getByTestId("last-event");
    expect(lastEvent).toBeDefined();
  })
});
