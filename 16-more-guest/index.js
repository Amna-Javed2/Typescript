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
console.log('good news! we find big table so we are inviting 3 more guests.');
guest_list.unshift('sir Zia khan');
guest_list.splice(2, 0, 'Maryam Nawaz');
guest_list.push('Biawal');
for (var i = 0; i < guest_list.length; i++) {
    console.log('Dear Mr.' + guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\n Thank you!');
}
