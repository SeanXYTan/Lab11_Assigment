
const main_page = document.querySelector('.main')

let contactList = [
    {
      name: "Roberta Dobbs",
      phone: "778-555-1234",
      address: "101 Main St, Anytown, USA",
      email: "subgenius@slack.example.com",
    }, 
    {
      name: "Bugs Bunny",
      phone: "123-867-5309",
      address: "Warner Brothers Animation Lot",
      email: "whatsup@doc.example.com",
    },
  ]

function cleanUpIndex() {
    const Contacts = document.querySelectorAll('.contact')
    Contacts.forEach(element => {
        element.remove()
    });
}

function renderIndex(contact_list) {

    contact_list.forEach((element, i) => {
        const p = document.createElement('p')
        const contact_card = document.createElement('div')
        contact_card.classList.add('contact')
        
        /* Looks specifically for the name inside each object */
        for(item in element) {
            if (item == 'name') {
                contact_name = element.name 
            }
        }    
        name_card = document.createTextNode(contact_name)
        p.appendChild(name_card)
        contact_card.appendChild(p)
        main_page.appendChild(contact_card)
    })
}
