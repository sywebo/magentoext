<?php
class Sywebo_Ajaxcart_Block_Popup extends Mage_Checkout_Block_Cart
{
    public function getContinueShoppingMessage()
    {
        return Mage::helper('checkout')->__("Continue Shopping");
    }

   public function getCheckoutMessage()
   {
       return Mage::helper('checkout')->__("Proceed to Checkout");
   }

   public function getProductWasAddedMessage()
   {
       return Mage::helper('checkout')->__("was added to cart");
   }

   public function getProductMessage()
   {
       return Mage::helper('checkout')->__("Product");
   }

   public function getAjaxUpdateBlocks()
   {

   }

}