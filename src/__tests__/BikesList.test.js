import BikesList from "../__mock__/BikesList";
import renderer from "react-test-renderer";
import React from "react";


describe("Bikes", () => {
    test("if bikes mocked automatically", () => {
        const component = renderer.create(
            <BikesList />
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();

    });
    }
)