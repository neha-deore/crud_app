import { mount, shallow } from "enzyme";
import App from "./App";
import EmpDetails from "./components/EmpDetails";

const onSubmitSpy = jest.fn();

describe("checking form elements", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<EmpDetails />);
  });
  it("Form Contains a Inputfield", () => {
    const in1 = wrapper.find("#n").exists();
    const in2 = wrapper.find("#a").exists();
    const in3 = wrapper.find("#d").exists();
    expect(in1).toEqual(true);
    expect(in2).toEqual(true);
    expect(in3).toEqual(true);
  });

  it("Form Contains a Button", () => {
    const btn1 = wrapper.find("#b1").exists();
    expect(btn1).toEqual(true);
  });

  it("Checking Button Label", () => {
    const btn1 = wrapper.find("#b1").text();
    expect(btn1).toEqual("Add EMP");
  });

  it("Checking Table Row Length", () => {
    const tb = wrapper.find("Table");
    expect(tb).toHaveLength(0);
  });
});

// describe("Checking Event and Method Calls", () => {
//   let wrapper;
//   beforeEach(() => {
//     wrapper = shallow(<EmpDetails />);
//   });

//   it("Update Emp Function", () => {
//     //expect(onSubmitSpy).not.toHaveBeenCalled();
//     const btn = wrapper.find("#b1").simulate("click");
//     expect(btn).toHaveBeenCalled();
//   });
// });
