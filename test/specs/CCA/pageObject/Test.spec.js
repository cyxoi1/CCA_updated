import { expect } from 'chai';
import Page from './Page';
import { DataPage } from './Data';

describe('', () => {

  before(() => {
    Page.open();
  });

  it.skip('should open browser page and check title', function() {

    expect(browser.getTitle()).eq(DataPage.appTitle);
    expect((Page.Header).getText()).eq(DataPage.title);
    expect((Page.Total).getText()).eq(DataPage.total);
    expect((Page.LF1).isDisplayed()).true;
    expect((Page.LF2).isDisplayed()).true;
    expect((Page.LF1).getText()).eq(DataPage.LF1);
    expect((Page.LF2).getText()).eq(DataPage.LF2);
    expect((Page.DeleteBtn).isDisplayed()).true;
    expect((Page.RestBtn).isDisplayed()).true;
    expect((Page.defaultCounter).getText()).eq(DataPage.defaultCounter);
    expect((Page.editCounterTitle).getText()).eq(DataPage.editCounterTitle);
    expect((Page.defaultCounterText).getValue()).eq(DataPage.defaultCounterText);
    expect((Page.enterCounterTitle).getText()).eq(DataPage.enterCounterTitle);


  });
//==============================================================================
  it('should verify Counter Name Field ', function() {

    expect((Page.counterNameField).getValue()).eq(DataPage.counterNameField);
  });


  it('should verify Enter Initial Count Label ', function() {

    expect((Page.enterInitialCountLabel).getText()).eq(DataPage.enterInitialCountLabel);
  });


});

