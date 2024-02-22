let guest_list :string[]=['Imran Khan','Nawaz Sharif','zardari'];
for(let i=0; i<guest_list.length; i++)
{
    console.log('Dear Mr.' + guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\n Thank you!'); 
    
}
let absent_Guest :string='Imran khan';
let new_guest :string ='kamran tessori';
guest_list[0]=new_guest;
for(let i=0; i<guest_list.length; i++)
{
    console.log('Dear Mr.' + guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\n Thank you!'); 
    
}
console.log(`Mr. ${absent_Guest} is not coming to the party`);
console.log('good news! we find big table so we are inviting 3 more guests.');
guest_list.unshift('sir Zia khan');
guest_list.splice(2,0,'Maryam Nawaz');
guest_list.push('Biawal');
for(let i=0; i<guest_list.length; i++)
{
    console.log('Dear Mr.' + guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\n Thank you!'); 
}
