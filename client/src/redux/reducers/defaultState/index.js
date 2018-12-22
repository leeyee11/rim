const initialState = {
  fullScreen:false,
  currUid:'A00000',
  currSid:'000',
  sessions:[{
    sid:'000',
    messages:[{
      mid:0,
      uid:'000000',
      time:'2018-12-17 22:00:00',
      content:'Hello World'
    },{
      mid:1,
      uid:'000000',
      time:'2018-12-17 22:01:00',
      content:'Welcome to secret session!'
    },{
      mid:2,
      uid:'000000',
      time:'2018-12-17 22:02:00',
      content:'You can send \"help\" to lean more.\n\
               1.please respect others;\n\
               2.please do not use sensitive word;\n\
               3.please do not talk about policy.'
    },{
      mid:3,
      uid:'A00000',
      time:'2018-12-17 22:03:00',
      content:'Noted'
    }]
  },{
    sid:'111',
    messages:[]
  },{
    sid:'222',
    messages:[]
  },{
    sid:'333',
    messages:[]
  },{
    sid:'444',
    messages:[]
  },{
    sid:'444',
    messages:[]
  }]
};
export default initialState;