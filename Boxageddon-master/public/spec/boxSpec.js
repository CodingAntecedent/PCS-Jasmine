// We are testing wether or not clicking changes class

describe("Boxageddon", function() {
  it("fixture loads paradise city", function() {
    loadFixtures('boxfixture.html');
    $('.boxfix').addClass('bob');
    // debugger;
    expect($('.boxfix')).toHaveClass('bob');
  });
  it("when a box is clicked it turns blue", function() {
    var spyEvent = spyOnEvent('td', 'click');
    $('td').click();
    expect(spyEvent).toHaveBeenTriggered();
  });
  it("when wipe is clicked the board wipes", function(){
    var spyEvent = spyOnEvent('.wipe', 'click');
    $('.wipe').click();
    expect(spyEvent).toHaveBeenTriggered();
  });
  it("when reset is clicked the board resets", function(){
    var spyEvent = spyOnEvent('.reset', 'click');
    $('.reset').click();
    expect(spyEvent).toHaveBeenTriggered();
  });
});