// SPDX-License-Identifier: ISC

pragma solidity 0.8.1;

interface ITokenTransferProxy {
    function transferFrom(
        address token,
        address from,
        address to,
        uint256 amount
    ) external;
}