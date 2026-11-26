
Feature: Add products to the shopping cart

  Scenario: Add a selected product to the cart
    Given the shopper is on the homepage
    When the shopper selects a product
    And the shopper selects a quantity of 2
    And the shopper clicks Add to cart
    Then the product should appear in the cart
    And the product quantity should be 2