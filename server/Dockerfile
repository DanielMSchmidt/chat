FROM instrumentisto/glide as builder

WORKDIR /go/src/server/
COPY . /go/src/server/
RUN glide install && CGO_ENABLED=0 GOOS=linux go build  .

FROM alpine:latest
RUN apk --no-cache add ca-certificates

WORKDIR /root/

COPY --from=builder /go/src/server/server .

CMD ["./server"]
