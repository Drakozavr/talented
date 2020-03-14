import React, { useState } from "react";
import FilteredMultiSelect from "react-filtered-multiselect";
import "./App.css";

// const templateOptions = [
//   { value: 1, text: "Web Developer" },
//   { value: 2, text: "Web Designer" }
// ];

const CULTURE_SHIPS = [
  { id: 1, name: "Option 1" },
  { id: 2, name: "Option 2" },
  // ...
  { id: 249, name: "Option 3" },
  { id: 250, name: "Option 4" }
];

export class TemplateSelect extends React.Component {
  state = { selectedShips: [] };

  handleDeselect(index) {
    var selectedShips = this.state.selectedShips.slice();
    selectedShips.splice(index, 1);
    this.setState({ selectedShips });
  }

  handleSelectionChange = selectedShips => {
    this.setState({ selectedShips });
  };

  render() {
    var { selectedShips } = this.state;
    return (
      <div className="App">
        <br></br>
        <FilteredMultiSelect
          onChange={this.handleSelectionChange}
          options={CULTURE_SHIPS}
          selectedOptions={selectedShips}
          textProp="name"
          valueProp="id"
          showFilter={false}
        />
        {selectedShips.length === 0 && <p>(nothing selected yet)</p>}
        {selectedShips.length > 0 && (
          <>
            {selectedShips.map((ship, i) => (
              <div key={ship.id}>
                {`${ship.name} `}
                <button type="button" onClick={() => this.handleDeselect(i)}>
                  &times;
                </button>
              </div>
            ))}
          </>
        )}
      </div>
    );
  }
}

// export const TemplateSelect = props => {
//   const [selectedTemplates, setSelectedTemplates] = useState([]);

//   return (
//     <>
//       <FilteredMultiSelect
//         options={templateOptions}
//         showFilter={false}
//         onChange={templates => {
//           const nextTemplates = selectedTemplates.concat(templates);
//           setSelectedTemplates(nextTemplates);
//         }}
//       />
//       {selectedTemplates.map((template, index) => {
//         return <p key={index}>{template.text}</p>;
//       })}
//     </>
//   );
// };
