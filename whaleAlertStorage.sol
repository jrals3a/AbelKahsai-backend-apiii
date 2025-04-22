// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

contract WhaleAlertStorage {
    event WhaleAlert(address indexed from, address indexed to, uint256 amount, string symbol);

    function storeWhaleTx(address from, address to, uint256 amount, string memory symbol) public {
        emit WhaleAlert(from, to, amount, symbol);
    }
}