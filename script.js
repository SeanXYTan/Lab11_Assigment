
const main_div = document.querySelector('.main')

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
    }
  ];


function cleanUpIndex() {
        while (main_div.lastChild) {
        main_div.lastChild.remove();
    };
};


function createSingleIndex(c_object) {

    /* Assigning the necessary elements */
    link_element = document.createElement('a');
    link_element.setAttribute('href', 'page3.html');
    p_element = document.createElement('p');
    contact_card = document.createElement('div');
    contact_card.classList.add('contact');
    name_card = document.createTextNode(c_object.name);

    /* Appending and constructing the DOM nodes */
    p_element.appendChild(name_card);
    contact_card.appendChild(p_element);
    link_element.appendChild(contact_card);
    main_div.appendChild(link_element);
} 


function renderIndex(c_list) {

    /* Loop for each object in the list */
    c_list.forEach((element) => {
        createSingleIndex(element)
    });
};


function cleanUpView() {    //Removes all the children, and then the parent
    contact_div = document.querySelector('.contactinfo')
    while (contact_div.lastChild) {
        contact_div.lastChild.remove()
    };
    contact_div.remove();
};


function renderView(c_object) {
    
    const contactclasses = ['contactname','contactemail','contactphone','contactaddress', 'buttons'];

    contact_div = document.createElement('div');
    contact_div.classList.add('contactinfo');

    contactclasses.forEach((e, i) => {
        e = document.createElement('div');
        e.classList.add(contactclasses[i]);
        contact_div.appendChild(e);
    });

    main_div.appendChild(contact_div);

    for (element in c_object) {
        if(element == 'name') {
            name_div = document.querySelector('.contactname')
            contact_name = document.createTextNode(c_object.name)
            name_div.appendChild(contact_name)
        };
        if(element == 'phone') {
            phone_div = document.querySelector('.contactphone')
            contact_phone = document.createTextNode('cell: ' + c_object.phone)
            phone_div.appendChild(contact_phone)
        };
        if(element == 'address') {
            address_div = document.querySelector('.contactaddress')
            contact_address = document.createTextNode('address: ' + c_object.address)
            address_div.appendChild(contact_address)
        };
        if(element == 'email') {
            email_div = document.querySelector('.contactemail')
            contact_email = document.createTextNode('email: ' + c_object.email)
            email_div.appendChild(contact_email)
        };
    };

    const buttons_list = [{class: 'button edit', value: 'Edit'}, {class: 'button close', value: 'Close'}]
    const img = {src: './img/profile.jpg', class: 'profilepic', alt: 'Profile picture'}
    
    button_div = document.querySelector('.buttons')
    buttons_list.forEach((x) => {
        button = document.createElement('button')
        for (e in x)
            button.setAttribute(e, x[e])
            button.innerHTML = x[e]
            button_div.appendChild(button)
    })

    name_div = document.querySelector('.contactname')
    profile_img = document.createElement('img')
    for (e in img)
        profile_img.setAttribute(e, img[e])
        name_div.appendChild(profile_img)
};
