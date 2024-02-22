var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// store the locations in the Array.make sure the array is not in alphabetical order .
var places = ['America', 'london', 'Pakistan', 'New york', 'Saudi Arabia'];
// print your array in its original order.
console.log(places);
// print your array in alphabetical order without modifying the actual list.
console.log(__spreadArray([], places, true).sort());
// show that your array is still in its original order by printing it.
console.log(places);
// print your array in reverse alphabatical order without changing the order of the original list.
console.log(__spreadArray([], places, true).sort().reverse());
// show that your array is still in its original order by printing it again.
console.log(places);
// reverse the order of your list.print the array to that its order has changed.
console.log(places.reverse());
// reverse the order of list again. print the list to show its back to its original order.
console.log(places.reverse());
//sort your array so its stored in alphabetical order.print the array to show that its order has been changed.
console.log(places.sort());
//sort  to change your array so its stored in  reverse alphabetical order.print the array to show that its order has  changed.
console.log(places.sort().reverse());
