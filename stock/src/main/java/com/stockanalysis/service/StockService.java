package com.stockanalysis.service;
//	import org.springframework.beans.factory.annotation.Value;
//	import org.springframework.stereotype.Service;
//	import org.springframework.web.reactive.function.client.WebClient;
//	import org.springframework.web.util.UriComponentsBuilder;
//
//import com.stockanalysis.dto.StockInfoDto;
//
//import reactor.core.publisher.Mono;
//
//	@Service
//	public class StockService {
//
//	    @Value("${alpha.vantage.api.key}")
//	    private String apiKey;
//
//	    private final WebClient webClient;
//
//	    public StockService(WebClient.Builder webClientBuilder) {
//	        this.webClient = webClientBuilder.baseUrl("https://www.alphavantage.co").build();
//	    }
//
//	    public Mono<StockInfoDto> getStockInfo(String symbol) {
//	        String uri = UriComponentsBuilder.fromUriString("/query")
//	                .queryParam("function", "TIME_SERIES_INTRADAY")
//	                .queryParam("symbol", symbol)
//	                .queryParam("interval", "5min")
//	                .queryParam("apikey", apiKey)
//	                .build()
//	                .toUriString();
//
//	        return this.webClient.get()
//	                .uri(uri)
//	                .retrieve()
//	                .bodyToMono(StockInfoDto.class);
//	    }
//	}




import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;


import com.stockanalysis.dto.StockData;

@Service
public class StockService {

    private final String API_KEY = "K4GTCQAK45144YYP";
    private final String BASE_URL = "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=RELIANCE.BSE&outputsize=fullK4GTCQAK45144YYP=demo";

    public StockData getStockData(String symbol) {
        String url = UriComponentsBuilder.fromHttpUrl(BASE_URL)
                .queryParam("function", "TIME_SERIES_INTRADAY")
                .queryParam("symbol", symbol)
                .queryParam("interval", "5min")
                .queryParam("apikey", API_KEY)
                .toUriString();

        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.getForObject(url, StockData.class);
    }
}

//
//
