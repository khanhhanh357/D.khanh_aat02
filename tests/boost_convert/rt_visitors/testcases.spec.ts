import { DATA } from "../../../data_product/product";
import test, { expect } from "../../../fixtures/base";



//Test case
test.describe("Test case 01", () => {
  test("Expect can select exact product for config", async ({
    loginPage,
    dashBoard,
    boostConvert,
  }) => {
    await dashBoard.clickAppsBtn();
    await boostConvert.gotoRealtimeVisitors();
    await boostConvert.clickCbShowForSomeProductISpeciify();//
    await boostConvert.clickBtnSelectProduct();
    await boostConvert.selectAllProduct();
    // await boostConvert.removeAllProduct();
    // await boostConvert.addProduct();
    // await boostConvert.clickContinueBtn();
    await boostConvert.click_Continue_With_Selected_Products();
    await boostConvert.save();
    let veriCount=await boostConvert.get_Number_Of_Products_Selected(DATA.length);
    expect(veriCount).toEqual(4);


  });
});

test.describe("Test case 01-1", () => {
  test.only("Expect can select exact product for config", async ({
    loginPage,
    dashBoard,
    boostConvert,
   
  }) => {
    await dashBoard.clickAppsBtn();
    await boostConvert.gotoRealtimeVisitors();
    await boostConvert.clickCbShowForSomeProductISpeciify();//
    await boostConvert.clickBtnSelectProduct();
    
   let count =0;
   let count2=0;
   let veriCount=await boostConvert.get_Number_Of_Products_Selected(DATA.length);
   let veriCount2=2;
  // let checkClick=await boostConvert.clickIconPlussOfProductWantToChoose(DATA[i].name);
   for(let i=0;i<DATA.length;i++){

    const check= await boostConvert.product_Selected();
    let find_Name= DATA.findIndex((data:any) =>data.name===check);
    if(find_Name !== -1){
    
      count++;
    }
   }
   await expect(count).toEqual(veriCount2);



    // let count2=0;
    // let veriCount= 2;//await boostConvert.get_Number_Of_Products_Selected(DATA.length);
    // //let check=await boostConvert.clickIconRemoveOfProductWantToChoose(DATA.name);
    // for(let i=0;i<DATA.length;i++){
      
    //    await boostConvert.clickIconPlussOfProductWantToChoose(DATA[i].name);
      
    //   //  let check2= await boostConvert.clickIconRemoveOfProductWantToChoose(DATA[i].name);
    //   //  if (check1=== DATA.forEach.name ||check2===DATA.forEach.name)
    //   count2++;

    // }
    // await boostConvert.click_Continue_With_Selected_Products();
   
  //   let count1=0;
  //   for(let i=0;i<DATA.length;i++){
      
  //     await boostConvert.clickIconRemoveOfProductWantToChoose(DATA[i].name);
     
  //    //  let check2= await boostConvert.clickIconRemoveOfProductWantToChoose(DATA[i].name);
  //    //  if (check1=== DATA.forEach.name ||check2===DATA.forEach.name)
  //    count1++;

  //  }
    
    
  
    // await expect(count1+count2).toEqual(veriCount);
    //await dashBoard.goToProductPage()
    
   
      
      // await dashBoard.clickProductPage(DATA.name);
    

    
    
  });
});


test.describe("Test API update", () => {
  test("Expect API is valid for default setting value config", async ({
    request,
  }) => {
    const baseURL =
      "https://test-khanh.onshopbase.com/admin/copt/timers/realtime-visitors/settings.json";
     // "https:test-khanh.onshopbase.com/admin/copt/countdown/customize.json"
      
    const response = await request.put(baseURL, {
      headers: {
        "X-ShopBase-Access-Token": `061eaea3fb52c082b37e0641c5b9b9df2462541f5b2ae318f43b75d8ea32daf3`,
      },
       
      data:{
        success: false,
        settings:{
          enable: false,
          number_random_from: 5,
          number_random_to: 100,
          trigger: { target: 'product', product_ids: [1000000407654734], collection_ids: [] }
      }
      },
      
    });
    console.log(await response.json());
    expect(response.status()).toBe(200);
   expect(response.ok).toBeTruthy();
    //console.log(await response.json());
    
  });
});

test.describe("Test case 02", () => {
  test("Expect API is valid for default setting value config", async ({
    request,
  }) => {
    const baseURL =
      "https://test-khanh.onshopbase.com/admin/copt/timers/realtime-visitors/settings.json";
    const response = await request.get(baseURL, {
      headers: {
        "X-ShopBase-Access-Token": `b65ce8a58a7a454c9131160b2f67c8ba20ffa7306471508ae8e73adf95a79831`,
      },
      
    });
    expect(response.ok).toBeTruthy();
   console.log(await response.json());
    // let a=await response.json();
    // console.log (a.settings.trigger.product_ids);

    
    
    expect(await response.json()).toMatchObject({
      settings: {
        enable: false,
        number_random_from: 5,
        number_random_to: 100,
      },
    });
  });
});

test.describe("Test case 03", () => {
  test("Expect button Change hide after click", async ({
    loginPage,
    dashBoard,
    boostConvert,
  }) => {
    await dashBoard.clickAppsBtn();
    await boostConvert.gotoRealtimeVisitors();
    await boostConvert.clickChangeBtn();
  });
});
