
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
    const Contacts = document.querySelectorAll('.contact') /* Creates a list of all divs with the class "contact" */
    Contacts.forEach(element => {
        element.remove()
    });
}

function createSingleIndex(c_object) {

    /* const link_element = document.createElement('a')   Future code for automatically linking the created contact page*/
    const p_element = document.createElement('p')
    const contact_card = document.createElement('div')
    contact_card.classList.add('contact')

    for(item in c_object) {
        if (item == 'name') {
            contact_name = c_object.name
        }
    }
    name_card = document.createTextNode(contact_name)
    p_element.appendChild(name_card)
    contact_card.appendChild(p_element)
    /* link_element.appendChild(contact_card)   Future code for automatically linking the created contact page*/
    main_page.appendChild(contact_card)
} 

function renderIndex(c_list) {

    /* Loop for each object in the list */
    c_list.forEach((element, i) => {

        /* const link_element = document.createElement('a')   Future code for automatically linking the created contact page*/
        const p_element = document.createElement('p')
        const contact_card = document.createElement('div')
        contact_card.classList.add('contact')

        /* Loop looks specifically for the name inside each object, so the order won't matter*/
        for(item in element) {
            if (item == 'name') {
                contact_name = element.name 
            }
        }    
        name_card = document.createTextNode(contact_name)
        p_element.appendChild(name_card)
        contact_card.appendChild(p_element)
        /* link_element.appendChild(contact_card)   Future code for automatically linking the created contact page*/
        main_page.appendChild(contact_card)
    })
}
