var guest_list = ['Imran Khan', 'Nawaz Sharif', 'zardari'];
for (var i = 0; i < guest_list.length; i++) {
    console.log('Dear Mr.' + guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\n Thank you!');
}
var absent_Guest = 'Imran khan';
var new_guest = 'kamran tessori';
guest_list[0] = new_guest;
for (var i = 0; i < guest_list.length; i++) {
    console.log('Dear Mr.' + guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\n Thank you!');
}
console.log("Mr. ".concat(absent_Guest, " is not coming to the party"));
