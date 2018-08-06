class FishTableRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDescription: false
    };
  }

  // Currently, the image being displayed is hardcoded from tinyurl.com

  //   function NumberList(props) {
  //   const numbers = props.numbers;
  //   const listItems = numbers.map((number) =>
  //     <ListItem key={number.toString()}
  //               value={number} />
  //
  //   );
  //   return (
  //     <ul>
  //       {listItems}
  //     </ul>
  //   );
  // }

  // function NumberList(props) {
  //   const numbers = props.numbers;
  //   return (
  //     <ul>
  //       {numbers.map((number) =>
  //         <ListItem key={number.toString()}
  //                   value={number} />
  //
  //       )}
  //     </ul>
  //   );
  // }

 // Refactor file to iterate through fishData from index.js, and to pull respective properties

 // {
 //   name: 'Goldfish',
 //   image: 'http://tinyurl.com/n4vgcl5',
 //   description: 'Everyone\'s first pet'
 // },
 // {
 //   name: 'Pufferfish',
 //   image: 'http://tinyurl.com/kxd7cuu',
 //   description: 'So puffy!'
 // },
 // {
 //   name: 'Tuna',
 //   image: 'http://tinyurl.com/zgs7z2s',
 //   description: 'Why are these things so huge? THey\'re terrifying.'
 // }

  render(props) {
    return (
      // <tr onClick={() => this.setState({showDescription: !this.state.showDescription})}>
      //   <td className="fish-name">Goldfish</td>
      //   <td>
      //     <img src="http://tinyurl.com/n4vgcl5" />
      //   </td>
      //   {this.state.showDescription ? <td className="fish-description">'Everyone\'s first pet'</td> : null}
      // </tr>

      <tr onClick={() => this.setState({showDescription: !this.state.showDescription})}>
        <td className="fish-name">{props.name}</td>
        <td>
          <img src="{props.image}" />
        </td>
        {this.state.showDescription ? <td className="fish-description">props.description</td> : null}
      </tr>

      // <tr onClick={() => this.setState({showDescription: !this.state.showDescription})}>
      //   <td className="fish-name">Pufferfish</td>
      //   <td>
      //     <img src="http://tinyurl.com/kxd7cuu" />
      //   </td>
      //   {this.state.showDescription ? <td className="fish-description">'So puffy!'</td> : null}
      // </tr>
      //
      // <tr onClick={() => this.setState({showDescription: !this.state.showDescription})}>
      //   <td className="fish-name">Tuna</td>
      //   <td>
      //     <img src="http://tinyurl.com/zgs7z2s" />
      //   </td>
      //   {this.state.showDescription ? <td className="fish-description">'Why are these things so huge? THey\'re terrifying.'</td> : null}
      // </tr>
    )
  }
}

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
FishTableRow.propTypes = {
  fish: React.PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.FishTableRow = FishTableRow;
