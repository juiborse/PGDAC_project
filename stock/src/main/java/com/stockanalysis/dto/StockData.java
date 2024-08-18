package com.stockanalysis.dto;


	

//	import com.fasterxml.jackson.annotation.JsonProperty;
//	import lombok.Data;
//
//	import java.util.Map;
//
//	@Data
//	public class StockInfoDto {
//
//	    @JsonProperty("Meta Data")
//	    private Map<String, String> metaData;
//
//	    @JsonProperty("Time Series (5min)")
//	    private Map<String, Map<String, String>> timeSeries;
//	}




import com.fasterxml.jackson.annotation.JsonProperty;
import java.util.Map;

public class StockData {

    @JsonProperty("Meta Data")
    private Map<String, String> metaData;

    @JsonProperty("Time Series (5min)")
    private Map<String, Map<String, String>> timeSeries;

    // Getters and Setters
    public Map<String, String> getMetaData() {
        return metaData;
    }

    public void setMetaData(Map<String, String> metaData) {
        this.metaData = metaData;
    }

    public Map<String, Map<String, String>> getTimeSeries() {
        return timeSeries;
    }

    public void setTimeSeries(Map<String, Map<String, String>> timeSeries) {
        this.timeSeries = timeSeries;
    }
}



