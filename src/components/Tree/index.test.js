import React from "react";
import { mount, shallow } from "enzyme";
import { LeafCard, TreeLeaf } from "./index";
import { StyledTreeItem } from "./styled";

const item = {
  id: "0",
  text: "title",
};

const items = {
  id: "1",
  text: "title1",
  children: [
    {
      id: "2",
      text: "title2",
      children: [
        { id: "3", text: "title3" },
        { id: "4", text: "title4" },
      ],
    },
    { id: "5", text: "title5", children: [{ id: "6", text: "title6" }] },
    { id: "7", text: "title7" },
    { id: "8", text: "title8" },
  ],
};

describe("list test", () => {
  it("test list card mount", () => {
    const card = mount(<LeafCard item={item} />);
    expect(card.text()).toEqual(item.text);
  });

  it("test list card shallow", () => {
    const card = shallow(<LeafCard item={item} />);
    expect(card.text()).toEqual(item.text);
  });

  it("treeleaf mount", () => {
    const wrapper = mount(<TreeLeaf item={items} />);
    console.log(wrapper.debug());
  });

  it("treeleaf shallow", () => {
    const tree = shallow(<TreeLeaf item={items} />);
    expect(tree.find(TreeLeaf)).toHaveLength(4);
    expect(tree.find(LeafCard)).toHaveLength(1);
  });
});
