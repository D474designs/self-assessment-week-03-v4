angular.module('fish-pond')
.controller('FishTableCtrl', function() {
  this.showDescription = false;
  this.toggleDescription = () => {
    this.showDescription = !this.showDescription;
  };
})

// <div class="container-fluid">
//   <div class="row">
//     <div class="col-md-2">
//       <!--Sidebar content-->
//
//       <p>
//         Search:
//         <input ng-model="$ctrl.query">
//       </p>
//
//       <p>
//         Sort by:
//         <select ng-model="$ctrl.orderProp">
//           <option value="name">Alphabetical</option>
//           <option value="age">Newest</option>
//         </select>
//       </p>
//
//     </div>
//     <div class="col-md-10">
//       <!--Body content-->
//
//       <ul class="phones">
//         <li ng-repeat="phone in $ctrl.phones | filter:$ctrl.query | orderBy:$ctrl.orderProp">
//           <span>{{phone.name}}</span>
//           <p>{{phone.snippet}}</p>
//         </li>
//       </ul>
//
//     </div>
//   </div>
// </div>

// Refactor to dynamically display main.js fishData

.component('fishTableRow', {
  bindings: {
    fish: '<'
  },
  controller: 'FishTableCtrl',
  //       <ul class="phones">
  //         <li ng-repeat="phone in $ctrl.phones | filter:$ctrl.query | orderBy:$ctrl.orderProp">
  //           <span>{{phone.name}}</span>
  //           <p>{{phone.snippet}}</p>
  //         </li>
  //       </ul>
  template: `
    <div ng-click="$ctrl.toggleDescription()">
      <span class="fish-name">Nemo</span>
      <span>
        <img src="http://tinyurl.com/h8o5szh" />
      </span>
      <span class="fish-description" ng-if="$ctrl.showDescription">Does anyone know where my dad is?</span>
    </div>`
});
