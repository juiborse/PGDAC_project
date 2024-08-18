package com.stockanalysis.controller;

//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//
//import com.stockanalysis.dto.StockInfoDto;
//import com.stockanalysis.service.StockService;
//
//import reactor.core.publisher.Mono;
//
//@RestController
//@RequestMapping("api/stocks/")
//@CrossOrigin(origins = "http://localhost:3000")
//public class StockController {
//	
//
//    @Autowired
//    private StockService stockService;
//
//    @GetMapping("{symbol}")
//    public Mono<ResponseEntity<StockInfoDto>> getStockInfo(@PathVariable String symbol) {
//        return stockService.getStockInfo(symbol)
//                .map(ResponseEntity::ok)
//                .defaultIfEmpty(ResponseEntity.notFound().build());
//}
//}





import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.stockanalysis.dto.StockData;
import com.stockanalysis.service.StockService;




@RestController
@RequestMapping("api/stocks/")
@CrossOrigin(origins = "http://localhost:3000")
public class StockController {

    @Autowired
    private StockService stockService;

    @GetMapping("/{symbol}")
    public ResponseEntity<?> getStockData(@PathVariable String symbol) {
        try {
            StockData stockData = stockService.getStockData(symbol);
            if (stockData == null || stockData.getMetaData() == null) {
                return ResponseEntity.status(404)
                                     .body("Stock data not found for symbol: " + symbol);
            }
            return ResponseEntity.ok(stockData);
        } catch (Exception e) {
            return ResponseEntity.status(500)
                                 .body("An error occurred while fetching stock data: " + e.getMessage());
        }
    }
}
