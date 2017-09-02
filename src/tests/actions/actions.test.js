import { setSelection, isRetrievingData } from "../../actions/actions";

describe("actions", () => {
  describe("setSelection", () => {
    it("has the correct type", () => {
      const action = setSelection();
      expect(action.type).toEqual('SET_SELECTION');
    });
    it("has the correct payload", () => {
      const action = setSelection("recent");
      expect(action.selection).toEqual("recent");
    });
  });

  // describe("getRecentCamperData", () => {
  //   it("has the correct type", () => {
  //     const action = getRecentCamperData();
  //     expect(action.type).toEqual('SET_SELECTION');
  //   });
   
  // });

  // describe("getAllTimeCamperData", () => {
  //   it("has the correct type", () => {
  //     const action = getAllTimeCamperData();
  //     expect(action.type).toEqual('SET_SELECTION');
  //   });
   
  // });

  describe("isRetrievingData", () => {
    it("has the correct type", () => {
      const action = isRetrievingData();
      expect(action.type).toEqual('SET_IS_RETREIVING_DATA');
    });

    it("has the correct payload", () => {
      const action = isRetrievingData(true);
      expect(action.status).toBe(true)
    });
   
  });

  
});
