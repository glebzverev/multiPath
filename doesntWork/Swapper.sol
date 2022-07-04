/*solhint-disable avoid-low-level-calls*/
// SPDX-License-Identifier: ISC

pragma solidity 0.8.1;
pragma abicoder v2;

import "./lib/Utils.sol";
import "./MultiPath.sol";

contract Swapper {
    Utils.SellData public SellData;
    Utils.Route [] public myRoute;
    Utils.Adapter [] Adapter;
    Utils.Path [] public Path;

    MultiPath public MP;


    constructor(address payable addressMP) {
        MP = MultiPath(addressMP);
    }

    function pushRoute (
        uint256 index, //Adapter at which index needs to be used
        address targetExchange
    ) public returns(Utils.Route[1] memory){
        Utils.Route[1] memory rout = [Utils.Route({
            index: index,
            targetExchange: targetExchange,
            percent: 1,
            payload: bytes("0x"),
            networkFee: 0
        })];
        return rout;
    }

    // function popRoute () external { Route.pop();}

    function createAdapter (
        uint256 index, //Adapter at which index needs to be used
        address targetExchange,
        
        address payable adapter

    ) public returns (Utils.Adapter [1] memory){
        Utils.Route[1] memory data;
        data = myRoute(index, targetExchange); 


        Utils.Adapter [1] memory adapt = [Utils.Adapter({
            adapter: adapter,
            percent: 1,
            networkFee: 0, 
            route: myRoute(index, targetExchange)
        })];
        return adapt;
    }

    // function createPath(address to) external{
        // Utils.Path memory data;
        // data.to = to;
        // data.totalNetworkFee = 0;
        // data.adapters = Adapter;
        // Utils.Path storage d = Utils.Path({to: to, totalNetworkFee: 0, adapters: Adapter});
        // Path.push(Utils.Path({to: to, totalNetworkFee: 0, adapters: Adapter}));
    // }
        // address to;
        // uint256 totalNetworkFee; //NOT USED - Network fee is associated with 0xv3 trades
        // Adapter[] adapters;

    function swap() public payable returns (uint256) {
        return MP.multiSwap(SellData);
    }

    // function creatPath()
}