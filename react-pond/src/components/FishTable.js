var FishTable = (props) => (
  <table>

    // function App1() {
    //   return <Greeting firstName="Ben" lastName="Hector" />;
    // }
    //
    // function App2() {
    //   const props = {firstName: 'Ben', lastName: 'Hector'};
    //   return <Greeting {...props} />;
    // }

    //     const Button = props => {
    //   const { kind, ...other } = props;
    //   const className = kind === "primary" ? "PrimaryButton" : "SecondaryButton";
    //   return <button className={className} {...other} />;
    // };
    //
    // const App = () => {
    //   return (
    //     <div>
    //       <Button kind="primary" onClick={() => console.log("clicked!")}>
    //         Hello World!
    //       </Button>
    //     </div>
    //   );
    // };

    /*
    Display proper information from index.js
    */

    <tbody>
      <FishTableRow fish={props} />
      <FishTableRow fish={props}/>
      <FishTableRow fish={props}/>
    </tbody>
  </table>
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
FishTable.propTypes = {
  fishes: React.PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.FishTable = FishTable;
