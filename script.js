
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

//Function 1
function cleanUpIndex() {
    Contacts = document.querySelectorAll('.contact')
    Contacts.forEach(element => {
        element.remove()
    });
}

//Function 2
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

//Function 3
function renderIndex(c_list) {

    /* Loop for each object in the list */
    c_list.forEach((element) => {
        createSingleIndex(element)
    });
};

//Function 4
function cleanUpView() {    //Removes all the children, and then the parent
    contact_div = document.querySelector('.contactinfo')
    while (contact_div.lastChild) {
        contact_div.lastChild.remove()
    };
    contact_div.remove();
};

//Function 5
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

//Function 6
function cleanUpCreate() {
    create_div = document.querySelector('.contactedit')
    while (create_div.lastChild) {
        create_div.lastChild.remove()
    };
    create_div.remove();
}

//Function 7
function renderCreate() {
     
    const contactedit_children = ['contactimg', 'form']

    edit_div = document.createElement('div')
    edit_div.classList.add('contactedit')
    main_div.appendChild(edit_div)

    contactedit_children.forEach((e, i) => {
        e = document.createElement('div');
        e.classList.add(contactedit_children[i]);
        console.log(e)
        edit_div.appendChild(e);
    });

    const img = {src: './img/profile.jpg', class: 'profilepic', alt: 'Profile picture'}

    contactimg = document.querySelector('.contactimg')
    profile_img = document.createElement('img')
    for (e in img)
        profile_img.setAttribute(e, img[e])
        contactimg.appendChild(profile_img)

    form_div = document.querySelector('.form')
    form = document.createElement('form')
    form_div.appendChild(form)

    inco1 = document.createElement('div')
    inco1.classList.add()

    for(var i=0; i<4; i++) {
        input = document.createElement('div')
        input.classList.add('inputcontainer')
        form.appendChild(input)
    }

    buttons = document.createElement('div')
    buttons.classList.add('buttons')
    form.appendChild(buttons)

    const containers = form.childNodes;
    const input_list = [{type: 'text', id: 'contactname', name: 'contactname', placeholder: 'Contact Name'}, {type: 'tel', id: 'contactphone', name: 'contactphone', placeholder: 'Contact Phone'}, {type: 'text', id: 'contactaddress', name: 'contactaddress', placeholder: 'Contact Address'}, {type: 'email', id: 'contactemail', name: 'contactemail', placeholder: 'Contact Email'}]
    const buttons_list = [{class: 'extrafield', id: 'extranamefield', name: 'extranamefield'}, {class: 'extrafield', id: 'extraphonefield', name: 'extraphonefield'}, {class: 'extrafield', id: 'extraaddressfield', name: 'extraaddressfield'}, {class: 'extrafield', id: 'extraemailfield', name: 'extraemailfield'}]
    const other_buttons_list = [{type: 'submit', class: 'button save', id: 'savecontact', name: 'savecontact'}, {type: 'reset', class: 'button cancel', id: 'cancel', name: 'cancel'}]
    const button_label = ['Save Contact', 'Cancel']

    var increasing = 0
    input_list.forEach((x) => {
        inputt = document.createElement('input')
        for (e in x)
            inputt.setAttribute(e, x[e])
        containers[increasing].appendChild(inputt)
        increasing++
    });

    var increase = 0
    buttons_list.forEach((x) => {
        button = document.createElement('button')
        for (e in x)
            button.setAttribute(e, x[e])
            button.innerHTML = '+'
        containers[increase].appendChild(button)
        increase++
    });

    var increased = 0
    other_buttons_list.forEach((x) => {
        button = document.createElement('button')
        for (e in x)
            button.setAttribute(e, x[e])
            button.innerHTML = button_label[increased]
            increased++
        buttons.appendChild(button)
    });
};

