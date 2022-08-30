import { Page } from "@playwright/test";
import { expect } from "../../fixtures/base";
import { CommonPage } from "./pages";

export default class BoostConvert {
  private page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  async gotoRealtimeVisitors() {
    await Promise.all([
      this.page.locator(`//a[contains(text(),"Real-time visitors")]`).click(),
      this.page.waitForSelector(`//h2[contains(text(),"Real-time visitors")]`, {
        state: `visible`,
      }),
    ]);
  }
  async clickCbShowForSomeProductISpeciify() {
    await this.page
      .locator(`//span[contains(text(), "Show for some products I specify")]`)
      .click();
  }

  async clickBtnSelectProduct() {
    await Promise.all([
    await this.page.locator(`//span[contains(text(), "Select products")]`).click(),
      this.page.waitForSelector(`//span[contains(text(),'Selected Products')]`,{
        state:`visible`,
      }),
    ])
  };

  async clickIconPlussOfProductWantToChoose(name:string){
    
      
      return await this.page
      .locator(`//div[text()='${name}']/../../following-sibling::span[@data-label="Select this product"]//child::span`)
      .click()

    
  }

  async clickIconRemoveOfProductWantToChoose(name:string){
    
     
    await this.page
   .locator(`//div[text()='${name}']/../../following-sibling::span[@data-label="Remove this product"]//child::span`)
   
}


async product_Selected(){
  
 
  // const a=
 const name_Product= await this.page
 .locator(`//span[contains(text(),'Selected Products')]/../following-sibling::div//child::div//child::div[@class='product-content']//child::div//child::div[@class='products-name fs-body m-b-xxs']`)
 const count = await name_Product.count()
for (let i = 0; i < count; ++i)
console.log(await name_Product.nth(i).textContent()) 
 //return (await name_Product.nth(i).textContent());
  }


  // async product_Selected2(){
  
 
  //   // const a=
  //   return await this.page
  //  .locator(`//span[contains(text(),'Selected Products')]/../following-sibling::div//child::div//child::div[@class='product-content']//child::div//child::div[@class='products-name fs-body m-b-xxs']`).innerText(getText(""))
      
  //   }


  async click_Continue_With_Selected_Products(){
    // await this.page.waitForSelector(`//h2[contains(text(),"Real-time visitors")]`, {
    //   state: `visible`,
    // }),
  
  await this.page
  .locator(`//span[contains(text(),'Continue with selected products')]`)
  .click();
  }

  async get_Number_Of_Products_Selected(number:Number){
    await this.page
    .locator(`//span[contains(text(),'${number} product selected')]`)
    return number;
  }

  async selectAllProduct() {
    await this.page
      .locator(
        `//div[@class='search-box']//span[@data-label='Select All']//span`
      )
      .click();
  }
  async save() {
    await this.page
      .locator(
        `//span[contains(text(),'Save')]`
      )
      .click();
  }

  async removeAllProduct() {
    await this.page
      .locator(
        `//div[@class='select-product-box']//span[@data-label='Remove All']//span`
      )
      .click();
  }

  async addProduct() {
    await this.page
      .locator(`//div[@class='product-selector']//div[2]//i`)
      .click();
  }

  async clickContinueBtn() {
    await this.page
      .locator(`//span[contains(text(),'Continue with selected products')]`)
      .click();
  }

  async clickChangeBtn() {
    await this.page.locator(`//span[contains(text(),'Change')]`).click();
    await expect(
      this.page.locator(`//span[contains(text(),'Change')]`)
    ).toBeHidden();
  }

  async gotoCustomize() {
    await Promise.all([
      this.page.locator(`//a[contains(text(),"Customize")]`).click(),
      this.page.waitForSelector(`//h2[contains(text(),"Customize")]`, {
        state: `visible`,
      }),
    ]);
  }

  async getTextStyle() {
    const style = await this.page
      .locator(`//div[contains(text(),'left to buy')]`)
      .getAttribute("style");
    await console.log(style);
  }
}

export const getText = (text, startString, endString) => {
  let startIndex = text.indexOf(startString) + startString.length;
  let remainText = text.substring(startIndex, text.length);

  let endIndex = remainText.indexOf(endString);
  let txt = remainText.substring(0, endIndex);

  return txt.trim();
}