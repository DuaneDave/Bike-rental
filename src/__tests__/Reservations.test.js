import React from "react";
import renderer from "react-test-renderer";
import Reservations from "../__mock__/Reservations";


describe("Reservations", () => {
    it ('if reservations mocked automatically', () => {
        const component = renderer.create(
            <Reservations />
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    }
    )
})