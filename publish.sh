#!/bin/bash
hugo --config=config_en.toml
hugo --config=config_es.toml
aws s3 cp public/es s3://es.diegotorr.es --recursive
aws s3 cp public/en s3://en.diegotorr.es --recursive
