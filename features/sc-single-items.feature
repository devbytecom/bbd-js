Feature: Shopping Cart

    Scenario: Purchasing apples costs the correct price
        When we add the following items into the cart
            | A99 |
        Then we should have the total as 50

    Scenario: Purchasing biscuits costs the correct price
        When we add the following items into the cart
            | B15 |
        Then we should have the total as 30

    Scenario: Purchasing colin the caterpillar costs the correct price
        When we add the following items into the cart
            | C40 |
        Then we should have the total as 60

    Scenario: Purchasing tea bags costs the correct price
        When we add the following items into the cart
            | T34 |
        Then we should have the total as 99