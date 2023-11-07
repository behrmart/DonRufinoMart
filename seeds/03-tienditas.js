/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('tienditas').del()
  await knex('tienditas').insert([
    {
        "tiendita_id": 1,
        "tiendita_name": "Krusty's Quick-E-Mart",
        "tiendita_addr_street": "742 Evergreen Terrace",
        "tiendita_addr_city": "Springfield",
        "tiendita_addr_zipcode": "12345",
        "tiendita_manager_name": "Apu Nahasapeemapetilon",
        "active": true
    },
    {
        "tiendita_id": 2,
        "tiendita_name": "Apu's Kwik-E-Mart",
        "tiendita_addr_street": "456 Fictional Avenue",
        "tiendita_addr_city": "Shelbyville",
        "tiendita_addr_zipcode": "67890",
        "tiendita_manager_name": "Apu Nahasapeemapetilon",
        "active": true
    },
    {
        "tiendita_id": 3,
        "tiendita_name": "Ned's Kwik-E-Mart",
        "tiendita_addr_street": "742 Evergreen Terrace",
        "tiendita_addr_city": "Capital City",
        "tiendita_addr_zipcode": "13579",
        "tiendita_manager_name": "Ned Flanders",
        "active": false
    },
    {
        "tiendita_id": 4,
        "tiendita_name": "Mo's Quick-E-Mart",
        "tiendita_addr_street": "742 Evergreen Terrace",
        "tiendita_addr_city": "Ogdenville",
        "tiendita_addr_zipcode": "24680",
        "tiendita_manager_name": "Moe Szyslak",
        "active": true
    },
    {
        "tiendita_id": 5,
        "tiendita_name": "Burns' Kwik-E-Mart",
        "tiendita_addr_street": "123 Fake Street",
        "tiendita_addr_city": "Springfield",
        "tiendita_addr_zipcode": "97531",
        "tiendita_manager_name": "Mr. Burns",
        "active": true
    },
    {
        "tiendita_id": 6,
        "tiendita_name": "Milhouse's Quick-E-Mart",
        "tiendita_addr_street": "742 Evergreen Terrace",
        "tiendita_addr_city": "Cypress Creek",
        "tiendita_addr_zipcode": "53179",
        "tiendita_manager_name": "Milhouse Van Houten",
        "active": false
    },
    {
        "tiendita_id": 7,
        "tiendita_name": "Comic Book Guy's Kwik-E-Mart",
        "tiendita_addr_street": "742 Evergreen Terrace",
        "tiendita_addr_city": "Springfield",
        "tiendita_addr_zipcode": "12345",
        "tiendita_manager_name": "Jeff Albertson",
        "active": true
    },
    {
        "tiendita_id": 8,
        "tiendita_name": "Homer's Quick-E-Mart",
        "tiendita_addr_street": "742 Evergreen Terrace",
        "tiendita_addr_city": "Springfield",
        "tiendita_addr_zipcode": "67890",
        "tiendita_manager_name": "Homer Simpson",
        "active": true
    },
    {
        "tiendita_id": 9,
        "tiendita_name": "Bart's Kwik-E-Mart",
        "tiendita_addr_street": "742 Evergreen Terrace",
        "tiendita_addr_city": "Springfield",
        "tiendita_addr_zipcode": "13579",
        "tiendita_manager_name": "Bart Simpson",
        "active": false
    },
    {
        "tiendita_id": 10,
        "tiendita_name": "Lisa's Kwik-E-Mart",
        "tiendita_addr_street": "742 Evergreen Terrace",
        "tiendita_addr_city": "Springfield",
        "tiendita_addr_zipcode": "24680",
        "tiendita_manager_name": "Lisa Simpson",
        "active": true
    }
]
);
};
