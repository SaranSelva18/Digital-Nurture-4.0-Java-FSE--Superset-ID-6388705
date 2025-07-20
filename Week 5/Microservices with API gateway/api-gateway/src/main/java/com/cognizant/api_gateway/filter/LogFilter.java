package com.cognizant.api_gateway.filter;

import org.springframework.cloud.gateway.filter.GlobalFilter;
import org.springframework.stereotype.Component;
import org.springframework.web.server.ServerWebExchange;
import reactor.core.publisher.Mono;

import java.util.logging.Logger;
@Component
public class LogFilter implements GlobalFilter {

    private static final Logger logger = Logger.getLogger(LogFilter.class.getName());

    @Override
    public Mono<Void> filter(ServerWebExchange exchange, org.springframework.cloud.gateway.filter.GatewayFilterChain chain) {
        logger.info("====>Request URI {}" + exchange.getRequest().getURI());
        return chain.filter(exchange);
    }


}