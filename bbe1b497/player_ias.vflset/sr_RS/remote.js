(function(g) {
    var window = this;
    'use strict';
    var P7 = function(a) {
            g.il(a, "zx", Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ g.Ya()).toString(36));
            return a
        },
        Q7 = function(a, b, c) {
            Array.isArray(c) || (c = [String(c)]);
            g.Cga(a.u, b, c)
        },
        Lnb = function(a) {
            if (a instanceof g.$n) return a;
            if ("function" == typeof a.nk) return a.nk(!1);
            if (g.Pa(a)) {
                var b = 0,
                    c = new g.$n;
                c.next = function() {
                    for (;;) {
                        if (b >= a.length) return g.j3;
                        if (b in a) return g.ao(a[b++]);
                        b++
                    }
                };
                return c
            }
            throw Error("Not implemented");
        },
        Mnb = function(a, b, c) {
            if (g.Pa(a)) g.Wb(a, b, c);
            else
                for (a = Lnb(a);;) {
                    var d = a.next();
                    if (d.done) break;
                    b.call(c, d.value, void 0, a)
                }
        },
        Nnb = function(a, b) {
            var c = [];
            Mnb(b, function(d) {
                try {
                    var e = g.xq.prototype.u.call(this, d, !0)
                } catch (f) {
                    if ("Storage: Invalid value was encountered" == f) return;
                    throw f;
                }
                void 0 === e ? c.push(d) : g.mla(e) && c.push(d)
            }, a);
            return c
        },
        Onb = function(a, b) {
            Nnb(a, b).forEach(function(c) {
                g.xq.prototype.remove.call(this, c)
            }, a)
        },
        Pnb = function(a) {
            if (a.ma) {
                if (a.ma.locationOverrideToken) return {
                    locationOverrideToken: a.ma.locationOverrideToken
                };
                if (null != a.ma.latitudeE7 && null != a.ma.longitudeE7) return {
                    latitudeE7: a.ma.latitudeE7,
                    longitudeE7: a.ma.longitudeE7
                }
            }
            return null
        },
        Qnb = function(a, b) {
            g.Bb(a, b) || a.push(b)
        },
        Rnb = function(a) {
            var b = 0,
                c;
            for (c in a) b++;
            return b
        },
        Snb = function(a, b) {
            return g.ad(a, b)
        },
        Tnb = function(a) {
            try {
                return g.La.JSON.parse(a)
            } catch (b) {}
            a = String(a);
            if (/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))) try {
                return eval("(" + a + ")")
            } catch (b) {}
            throw Error("Invalid JSON string: " + a);
        },
        R7 = function(a) {
            if (g.La.JSON) try {
                return g.La.JSON.parse(a)
            } catch (b) {}
            return Tnb(a)
        },
        Unb = function(a, b, c, d) {
            var e = new g.Pk(null);
            a && g.bl(e, a);
            b && g.cl(e, b);
            c && g.dl(e, c);
            d && (e.B = d);
            return e
        },
        Vnb = function() {
            this.j = S7();
            this.j.yj("/client_streamz/youtube/living_room/mdx/channel/opened", {
                Wd: 3,
                Vd: "channel_type"
            })
        },
        Wnb = function(a, b) {
            a.j.hk("/client_streamz/youtube/living_room/mdx/channel/opened", b)
        },
        Xnb = function() {
            this.j = S7();
            this.j.yj("/client_streamz/youtube/living_room/mdx/channel/closed", {
                Wd: 3,
                Vd: "channel_type"
            })
        },
        Ynb = function(a, b) {
            a.j.hk("/client_streamz/youtube/living_room/mdx/channel/closed", b)
        },
        Znb = function() {
            this.j = S7();
            this.j.yj("/client_streamz/youtube/living_room/mdx/channel/message_received", {
                Wd: 3,
                Vd: "channel_type"
            })
        },
        $nb = function(a, b) {
            a.j.hk("/client_streamz/youtube/living_room/mdx/channel/message_received", b)
        },
        aob = function() {
            this.j = S7();
            this.j.yj("/client_streamz/youtube/living_room/mdx/channel/error", {
                Wd: 3,
                Vd: "channel_type"
            })
        },
        bob = function(a, b) {
            a.j.hk("/client_streamz/youtube/living_room/mdx/channel/error", b)
        },
        cob = function() {
            this.j = S7();
            this.j.yj("/client_streamz/youtube/living_room/mdx/browser_channel/pending_maps")
        },
        dob = function() {
            this.j = S7();
            this.j.yj("/client_streamz/youtube/living_room/mdx/browser_channel/undelivered_maps")
        },
        T7 = function(a) {
            this.name = this.id = "";
            this.clientName = "UNKNOWN_INTERFACE";
            this.app = "";
            this.type = "REMOTE_CONTROL";
            this.obfuscatedGaiaId = this.avatar = this.username = "";
            this.capabilities = new Set;
            this.compatibleSenderThemes = new Set;
            this.experiments = new Set;
            this.theme = "u";
            new g.gq;
            this.model = this.brand = "";
            this.year = 0;
            this.chipset = this.osVersion = this.os = "";
            this.mdxDialServerType = "MDX_DIAL_SERVER_TYPE_UNKNOWN";
            a && (this.id = a.id || a.name, this.name = a.name, this.clientName = a.clientName ? a.clientName.toUpperCase() : "UNKNOWN_INTERFACE", this.app = a.app, this.type =
                a.type || "REMOTE_CONTROL", this.username = a.user || "", this.avatar = a.userAvatarUri || "", this.obfuscatedGaiaId = a.obfuscatedGaiaId || "", this.theme = a.theme || "u", eob(this, a.capabilities || ""), fob(this, a.compatibleSenderThemes || ""), gob(this, a.experiments || ""), this.brand = a.brand || "", this.model = a.model || "", this.year = a.year || 0, this.os = a.os || "", this.osVersion = a.osVersion || "", this.chipset = a.chipset || "", this.mdxDialServerType = a.mdxDialServerType || "MDX_DIAL_SERVER_TYPE_UNKNOWN", a = a.deviceInfo) && (a = JSON.parse(a), this.brand =
                a.brand || "", this.model = a.model || "", this.year = a.year || 0, this.os = a.os || "", this.osVersion = a.osVersion || "", this.chipset = a.chipset || "", this.clientName = a.clientName ? a.clientName.toUpperCase() : "UNKNOWN_INTERFACE", this.mdxDialServerType = a.mdxDialServerType || "MDX_DIAL_SERVER_TYPE_UNKNOWN")
        },
        eob = function(a, b) {
            a.capabilities.clear();
            g.fo(b.split(","), g.Xa(Snb, hob)).forEach(function(c) {
                a.capabilities.add(c)
            })
        },
        fob = function(a, b) {
            a.compatibleSenderThemes.clear();
            g.fo(b.split(","), g.Xa(Snb, iob)).forEach(function(c) {
                a.compatibleSenderThemes.add(c)
            })
        },
        gob = function(a, b) {
            a.experiments.clear();
            b.split(",").forEach(function(c) {
                a.experiments.add(c)
            })
        },
        U7 = function(a) {
            a = a || {};
            this.name = a.name || "";
            this.id = a.id || a.screenId || "";
            this.token = a.token || a.loungeToken || "";
            this.uuid = a.uuid || a.dialId || "";
            this.idType = a.screenIdType || "normal"
        },
        V7 = function(a, b) {
            return !!b && (a.id == b || a.uuid == b)
        },
        job = function(a) {
            return {
                name: a.name,
                screenId: a.id,
                loungeToken: a.token,
                dialId: a.uuid,
                screenIdType: a.idType
            }
        },
        kob = function(a) {
            return new U7(a)
        },
        lob = function(a) {
            return Array.isArray(a) ? g.qm(a, kob) : []
        },
        W7 = function(a) {
            return a ? '{name:"' + a.name + '",id:' + a.id.substr(0, 6) + "..,token:" + ((a.token ? ".." + a.token.slice(-6) : "-") + ",uuid:" + (a.uuid ? ".." + a.uuid.slice(-6) : "-") + ",idType:" + a.idType + "}") : "null"
        },
        mob = function(a) {
            return Array.isArray(a) ? "[" + g.qm(a, W7).join(",") + "]" : "null"
        },
        nob = function() {
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,
                function(a) {
                    var b = 16 * Math.random() | 0;
                    return ("x" == a ? b : b & 3 | 8).toString(16)
                })
        },
        oob = function(a) {
            return g.qm(a, function(b) {
                return {
                    key: b.id,
                    name: b.name
                }
            })
        },
        pob = function(a, b) {
            return g.xb(a, function(c) {
                return c || b ? !c != !b ? !1 : c.id == b.id : !0
            })
        },
        X7 = function(a, b) {
            return g.xb(a, function(c) {
                return V7(c, b)
            })
        },
        qob = function() {
            var a = (0, g.jA)();
            a && Onb(a, a.j.nk(!0))
        },
        Y7 = function() {
            var a = g.mA("yt-remote-connected-devices") || [];
            g.Tb(a);
            return a
        },
        rob = function(a) {
            if (0 == a.length) return [];
            var b = a[0].indexOf("#"),
                c = -1 == b ? a[0] : a[0].substring(0, b);
            return g.qm(a, function(d, e) {
                return 0 == e ? d : d.substring(c.length)
            })
        },
        sob = function(a) {
            g.lA("yt-remote-connected-devices", a, 86400)
        },
        Z7 = function() {
            if (tob) return tob;
            var a = g.mA("yt-remote-device-id");
            a || (a = nob(), g.lA("yt-remote-device-id", a, 31536E3));
            for (var b = Y7(), c = 1, d = a; g.Bb(b, d);) c++, d = a + "#" + c;
            return tob = d
        },
        uob = function() {
            var a = Y7(),
                b = Z7();
            g.oA() && g.Vb(a, b);
            a = rob(a);
            if (0 == a.length) try {
                g.nz("remote_sid")
            } catch (c) {} else try {
                g.lz("remote_sid", a.join(","), -1)
            } catch (c) {}
        },
        vob = function() {
            return g.mA("yt-remote-session-browser-channel")
        },
        wob = function() {
            return g.mA("yt-remote-local-screens") || []
        },
        xob = function() {
            g.lA("yt-remote-lounge-token-expiration", !0, 86400)
        },
        yob = function(a) {
            5 < a.length && (a = a.slice(a.length - 5));
            var b = g.qm(wob(), function(d) {
                    return d.loungeToken
                }),
                c = g.qm(a, function(d) {
                    return d.loungeToken
                });
            g.rm(c, function(d) {
                return !g.Bb(b, d)
            }) && xob();
            g.lA("yt-remote-local-screens", a, 31536E3)
        },
        $7 = function(a) {
            a || (g.nA("yt-remote-session-screen-id"), g.nA("yt-remote-session-video-id"));
            uob();
            a = Y7();
            g.Db(a, Z7());
            sob(a)
        },
        zob = function() {
            if (!a8) {
                var a = g.Gq();
                a && (a8 = new g.uq(a))
            }
        },
        Aob = function() {
            zob();
            return a8 ? !!a8.get("yt-remote-use-staging-server") : !1
        },
        b8 = function(a, b) {
            g.HC[a] = !0;
            var c = g.FC();
            c && c.publish.apply(c, arguments);
            g.HC[a] = !1
        },
        Bob = function() {},
        S7 = function() {
            if (!c8) {
                c8 = new g.Nf(new Bob);
                var a = g.Dy("client_streamz_web_flush_count", -1); - 1 !== a && (c8.C = a)
            }
            return c8
        },
        Cob = function() {
            var a = window.navigator.userAgent.match(/Chrome\/([0-9]+)/);
            return a ? parseInt(a[1], 10) : 0
        },
        Dob = function(a) {
            return !!document.currentScript && (-1 != document.currentScript.src.indexOf("?" + a) || -1 != document.currentScript.src.indexOf("&" + a))
        },
        Eob = function() {
            return "function" == typeof window.__onGCastApiAvailable ? window.__onGCastApiAvailable : null
        },
        d8 = function(a) {
            a.length ? Fob(a.shift(), function() {
                d8(a)
            }) : Gob()
        },
        Hob = function(a) {
            return "chrome-extension://" + a + "/cast_sender.js"
        },
        Fob = function(a, b, c) {
            var d = document.createElement("script");
            d.onerror = b;
            c && (d.onload = c);
            g.sk(d, g.Gr(a));
            (document.head || document.documentElement).appendChild(d)
        },
        Iob = function() {
            var a = Cob(),
                b = [];
            if (1 < a) {
                var c = a - 1;
                b.push("//www.gstatic.com/eureka/clank/" + a + "/cast_sender.js");
                b.push("//www.gstatic.com/eureka/clank/" + c + "/cast_sender.js")
            }
            return b
        },
        Gob = function() {
            var a = Eob();
            a && a(!1, "No cast extension found")
        },
        Kob = function() {
            if (Job) {
                var a = 2,
                    b = Eob(),
                    c = function() {
                        a--;
                        0 == a && b && b(!0)
                    };
                window.__onGCastApiAvailable = c;
                Fob("//www.gstatic.com/cast/sdk/libs/sender/1.0/cast_framework.js", Gob, c)
            }
        },
        Lob = function() {
            Kob();
            var a = Iob();
            a.push("//www.gstatic.com/eureka/clank/cast_sender.js");
            d8(a)
        },
        Nob = function() {
            Kob();
            var a = Iob();
            a.push.apply(a, g.oa(Mob.map(Hob)));
            a.push("//www.gstatic.com/eureka/clank/cast_sender.js");
            d8(a)
        },
        e8 = function(a, b, c) {
            g.D.call(this);
            this.J = null != c ? (0, g.Wa)(a, c) : a;
            this.Ii = b;
            this.D = (0, g.Wa)(this.d_, this);
            this.j = !1;
            this.u = 0;
            this.B = this.Hc = null;
            this.C = []
        },
        f8 = function(a, b, c) {
            g.D.call(this);
            this.C = null != c ? a.bind(c) : a;
            this.Ii = b;
            this.B = null;
            this.j = !1;
            this.u = 0;
            this.Hc = null
        },
        Oob = function(a) {
            a.Hc = g.Lf(function() {
                a.Hc = null;
                a.j && !a.u && (a.j = !1, Oob(a))
            }, a.Ii);
            var b = a.B;
            a.B = null;
            a.C.apply(null, b)
        },
        g8 = function() {},
        Pob = function() {
            g.tb.call(this, "p")
        },
        Qob = function() {
            g.tb.call(this, "o")
        },
        Sob = function() {
            return Rob = Rob || new g.Cd
        },
        Tob = function(a) {
            g.tb.call(this, "serverreachability", a)
        },
        h8 = function(a) {
            var b = Sob();
            b.dispatchEvent(new Tob(b, a))
        },
        Uob = function(a) {
            g.tb.call(this, "statevent", a)
        },
        i8 = function(a) {
            var b = Sob();
            b.dispatchEvent(new Uob(b, a))
        },
        Vob = function(a, b, c, d) {
            g.tb.call(this, "timingevent", a);
            this.size = b;
            this.Hz = d
        },
        j8 = function(a, b) {
            if ("function" !== typeof a) throw Error("Fn must not be null and must be a function");
            return g.La.setTimeout(function() {
                a()
            }, b)
        },
        Wob = function() {},
        k8 = function(a, b, c, d) {
            this.D = a;
            this.C = b;
            this.md = c;
            this.Mc = d || 1;
            this.ib = new g.nl(this);
            this.Hb = 45E3;
            a = g.pL ? 125 : void 0;
            this.qb = new g.Kf(a);
            this.Ma = null;
            this.B = !1;
            this.V = this.fb = this.K = this.Oa = this.Aa = this.Ab = this.ea = null;
            this.qa = [];
            this.j = null;
            this.ma = 0;
            this.J = this.Da = null;
            this.Pb = -1;
            this.Ja = !1;
            this.ub = 0;
            this.Za = null;
            this.Cc = this.Ua = this.qc = this.Ba = !1;
            this.u = new Xob
        },
        Xob = function() {
            this.B = null;
            this.j = "";
            this.u = !1
        },
        Zob = function(a, b, c) {
            a.Oa = 1;
            a.K = P7(b.clone());
            a.V = c;
            a.Ba = !0;
            Yob(a, null)
        },
        Yob = function(a, b) {
            a.Aa = Date.now();
            l8(a);
            a.fb = a.K.clone();
            Q7(a.fb, "t", a.Mc);
            a.ma = 0;
            var c = a.D.Oa;
            a.u = new Xob;
            a.j = $ob(a.D, c ? b : null, !a.V);
            0 < a.ub && (a.Za = new f8((0, g.Wa)(a.HQ, a, a.j), a.ub));
            a.ib.Sa(a.j, "readystatechange", a.g_);
            b = a.Ma ? g.hd(a.Ma) : {};
            a.V ? (a.Da || (a.Da = "POST"), b["Content-Type"] = "application/x-www-form-urlencoded", a.j.send(a.fb, a.Da, a.V, b)) : (a.Da = "GET", a.j.send(a.fb, a.Da, null, b));
            h8(1)
        },
        apb = function(a) {
            return a.j ? "GET" == a.Da && 2 != a.Oa && a.D.Ie : !1
        },
        epb = function(a, b, c) {
            for (var d = !0, e; !a.Ja && a.ma < c.length;)
                if (e = bpb(a, c), e == m8) {
                    4 ==
                        b && (a.J = 4, i8(14), d = !1);
                    break
                } else if (e == cpb) {
                a.J = 4;
                i8(15);
                d = !1;
                break
            } else dpb(a, e);
            apb(a) && e != m8 && e != cpb && (a.u.j = "", a.ma = 0);
            4 != b || 0 != c.length || a.u.u || (a.J = 1, i8(16), d = !1);
            a.B = a.B && d;
            d ? 0 < c.length && !a.Cc && (a.Cc = !0, a.D.zN(a)) : (n8(a), o8(a))
        },
        bpb = function(a, b) {
            var c = a.ma,
                d = b.indexOf("\n", c);
            if (-1 == d) return m8;
            c = Number(b.substring(c, d));
            if (isNaN(c)) return cpb;
            d += 1;
            if (d + c > b.length) return m8;
            b = b.slice(d, d + c);
            a.ma = d + c;
            return b
        },
        l8 = function(a) {
            a.Ab = Date.now() + a.Hb;
            fpb(a, a.Hb)
        },
        fpb = function(a, b) {
            if (null != a.ea) throw Error("WatchDog timer not null");
            a.ea = j8((0, g.Wa)(a.e_, a), b)
        },
        p8 = function(a) {
            a.ea && (g.La.clearTimeout(a.ea), a.ea = null)
        },
        o8 = function(a) {
            a.D.Yg() || a.Ja || gpb(a.D, a)
        },
        n8 = function(a) {
            p8(a);
            g.kb(a.Za);
            a.Za = null;
            a.qb.stop();
            a.ib.Gf();
            if (a.j) {
                var b = a.j;
                a.j = null;
                b.abort();
                b.dispose()
            }
        },
        dpb = function(a, b) {
            try {
                var c = a.D;
                if (0 != c.rh && (c.j == a || hpb(c.u, a)))
                    if (!a.Ua && hpb(c.u, a) && 3 == c.rh) {
                        try {
                            var d = c.yf.j.parse(b)
                        } catch (B) {
                            d = null
                        }
                        if (Array.isArray(d) && 3 == d.length) {
                            var e = d;
                            if (0 == e[0]) a: {
                                if (!c.V) {
                                    if (c.j)
                                        if (c.j.Aa + 3E3 < a.Aa) q8(c), r8(c);
                                        else break a;
                                    ipb(c);
                                    i8(18)
                                }
                            }
                            else c.ye = e[1], 0 < c.ye - c.Za && 37500 > e[2] && c.Ua && 0 == c.qa && !c.ma && (c.ma = j8((0, g.Wa)(c.h_, c), 6E3));
                            if (1 >= jpb(c.u) && c.Rc) {
                                try {
                                    c.Rc()
                                } catch (B) {}
                                c.Rc = void 0
                            }
                        } else s8(c, 11)
                    } else if ((a.Ua || c.j == a) && q8(c), !g.cc(b))
                    for (e = c.yf.j.parse(b), b = 0; b < e.length; b++) {
                        var f = e[b];
                        c.Za = f[0];
                        f = f[1];
                        if (2 == c.rh)
                            if ("c" == f[0]) {
                                c.C = f[1];
                                c.Cc = f[2];
                                var h = f[3];
                                null != h && (c.IQ = h);
                                var l = f[5];
                                null != l && "number" === typeof l && 0 < l && (c.ib = 1.5 * l);
                                d = c;
                                var m = a.UL();
                                if (m) {
                                    var n = g.Ej(m, "X-Client-Wire-Protocol");
                                    if (n) {
                                        var p = d.u;
                                        !p.j && (g.fc(n, "spdy") || g.fc(n, "quic") || g.fc(n, "h2")) && (p.C = p.D, p.j = new Set, p.u && (kpb(p, p.u), p.u = null))
                                    }
                                    if (d.Ba) {
                                        var q = g.Ej(m, "X-HTTP-Session-Id");
                                        q && (d.Ae = q, g.il(d.Ma, d.Ba, q))
                                    }
                                }
                                c.rh = 3;
                                c.D && c.D.OQ();
                                c.Qc && (c.od = Date.now() - a.Aa);
                                d = c;
                                var t = a;
                                d.Ed = lpb(d, d.Oa ? d.Cc : null, d.Mc);
                                if (t.Ua) {
                                    mpb(d.u,
                                        t);
                                    var u = t,
                                        y = d.ib;
                                    y && u.setTimeout(y);
                                    u.ea && (p8(u), l8(u));
                                    d.j = t
                                } else npb(d);
                                0 < c.B.length && t8(c)
                            } else "stop" != f[0] && "close" != f[0] || s8(c, 7);
                        else 3 == c.rh && ("stop" == f[0] || "close" == f[0] ? "stop" == f[0] ? s8(c, 7) : c.disconnect() : "noop" != f[0] && c.D && c.D.NQ(f), c.qa = 0)
                    }
                h8(4)
            } catch (B) {}
        },
        opb = function(a, b) {
            this.j = a;
            this.map = b;
            this.context = null
        },
        ppb = function(a) {
            this.D = a || 10;
            g.La.PerformanceNavigationTiming ? (a = g.La.performance.getEntriesByType("navigation"), a = 0 < a.length && ("hq" == a[0].nextHopProtocol || "h2" == a[0].nextHopProtocol)) : a = !!(g.La.chrome && g.La.chrome.loadTimes && g.La.chrome.loadTimes() && g.La.chrome.loadTimes().wasFetchedViaSpdy);
            this.C = a ? this.D : 1;
            this.j = null;
            1 < this.C && (this.j = new Set);
            this.u = null;
            this.B = []
        },
        qpb = function(a) {
            return a.u ? !0 : a.j ? a.j.size >= a.C : !1
        },
        jpb = function(a) {
            return a.u ? 1 : a.j ? a.j.size : 0
        },
        hpb = function(a, b) {
            return a.u ? a.u == b : a.j ? a.j.has(b) : !1
        },
        kpb =
        function(a, b) {
            a.j ? a.j.add(b) : a.u = b
        },
        mpb = function(a, b) {
            a.u && a.u == b ? a.u = null : a.j && a.j.has(b) && a.j.delete(b)
        },
        rpb = function(a) {
            if (null != a.u) return a.B.concat(a.u.qa);
            if (null != a.j && 0 !== a.j.size) {
                var b = a.B;
                a = g.v(a.j.values());
                for (var c = a.next(); !c.done; c = a.next()) b = b.concat(c.value.qa);
                return b
            }
            return g.Gb(a.B)
        },
        spb = function(a, b) {
            var c = new Wob;
            if (g.La.Image) {
                var d = new Image;
                d.onload = g.Xa(u8, c, d, "TestLoadImage: loaded", !0, b);
                d.onerror = g.Xa(u8, c, d, "TestLoadImage: error", !1, b);
                d.onabort = g.Xa(u8, c, d, "TestLoadImage: abort", !1, b);
                d.ontimeout = g.Xa(u8, c, d, "TestLoadImage: timeout", !1, b);
                g.La.setTimeout(function() {
                    if (d.ontimeout) d.ontimeout()
                }, 1E4);
                d.src = a
            } else b(!1)
        },
        u8 = function(a, b, c, d, e) {
            try {
                b.onload = null, b.onerror = null, b.onabort = null, b.ontimeout = null, e(d)
            } catch (f) {}
        },
        tpb = function() {
            this.j = new g8
        },
        upb = function(a, b, c) {
            var d = c || "";
            try {
                g.Ok(a, function(e, f) {
                    var h = e;
                    g.Ra(e) && (h = g.Wi(e));
                    b.push(d + f + "=" + encodeURIComponent(h))
                })
            } catch (e) {
                throw b.push(d + "type=" + encodeURIComponent("_badmap")), e;
            }
        },
        v8 = function(a, b, c) {
            return c && c.e4 ? c.e4[a] || b : b
        },
        vpb = function(a) {
            this.B = [];
            this.Cc = this.Ed = this.Ma = this.Mc = this.j = this.Ae = this.Ba = this.Ja = this.K = this.Ab = this.ea = null;
            this.Zf = this.fb = 0;
            this.Xf = v8("failFast", !1, a);
            this.Ua = this.ma = this.V = this.J = this.D = null;
            this.md = !0;
            this.ye = this.Za = -1;
            this.qc = this.qa = this.Aa = 0;
            this.If = v8("baseRetryDelayMs", 5E3, a);
            this.ag = v8("retryDelaySeedMs", 1E4, a);
            this.Yf = v8("forwardChannelMaxRetries", 2, a);
            this.xe = v8("forwardChannelRequestTimeoutMs", 2E4, a);
            this.ze = a && a.Q9a || void 0;
            this.Ie = a && a.N9a || !1;
            this.ib = void 0;
            this.Oa = a && a.c9 || !1;
            this.C = "";
            this.u =
                new ppb(a && a.y7a);
            this.yf = new tpb;
            this.Hb = a && a.O7a || !1;
            this.ub = a && a.E7a || !1;
            this.Hb && this.ub && (this.ub = !1);
            this.cg = a && a.r7a || !1;
            a && a.Q7a && (this.md = !1);
            this.Qc = !this.Hb && this.md && a && a.B7a || !1;
            this.yd = void 0;
            a && a.tV && 0 < a.tV && (this.yd = a.tV);
            this.Rc = void 0;
            this.od = 0;
            this.qb = !1;
            this.Pb = this.Da = null
        },
        r8 = function(a) {
            a.j && (wpb(a), a.j.cancel(), a.j = null)
        },
        xpb = function(a) {
            r8(a);
            a.V && (g.La.clearTimeout(a.V), a.V = null);
            q8(a);
            a.u.cancel();
            a.J && ("number" === typeof a.J && g.La.clearTimeout(a.J), a.J = null)
        },
        t8 = function(a) {
            qpb(a.u) || a.J || (a.J = !0, g.xf(a.KQ, a), a.Aa = 0)
        },
        zpb = function(a, b) {
            if (jpb(a.u) >= a.u.C - (a.J ? 1 : 0)) return !1;
            if (a.J) return a.B = b.qa.concat(a.B), !0;
            if (1 == a.rh || 2 == a.rh || a.Aa >= (a.Xf ? 0 : a.Yf)) return !1;
            a.J = j8((0, g.Wa)(a.KQ, a, b), ypb(a, a.Aa));
            a.Aa++;
            return !0
        },
        Bpb = function(a, b) {
            var c;
            b ? c = b.md : c = a.fb++;
            var d = a.Ma.clone();
            g.il(d, "SID", a.C);
            g.il(d, "RID", c);
            g.il(d, "AID", a.Za);
            w8(a, d);
            a.K && a.ea && g.ml(d, a.K, a.ea);
            c = new k8(a, a.C, c, a.Aa + 1);
            null === a.K && (c.Ma = a.ea);
            b && (a.B = b.qa.concat(a.B));
            b = Apb(a, c, 1E3);
            c.setTimeout(Math.round(.5 * a.xe) + Math.round(.5 * a.xe * Math.random()));
            kpb(a.u, c);
            Zob(c, d, b)
        },
        w8 = function(a, b) {
            a.Ja && g.Sc(a.Ja, function(c, d) {
                g.il(b, d, c)
            });
            a.D && g.Ok({}, function(c, d) {
                g.il(b, d, c)
            })
        },
        Apb = function(a, b, c) {
            c = Math.min(a.B.length, c);
            var d = a.D ? (0, g.Wa)(a.D.i_, a.D, a) : null;
            a: for (var e = a.B, f = -1;;) {
                var h = ["count=" + c]; - 1 == f ? 0 < c ? (f = e[0].j, h.push("ofs=" + f)) : f = 0 : h.push("ofs=" + f);
                for (var l = !0, m = 0; m < c; m++) {
                    var n = e[m].j,
                        p = e[m].map;
                    n -= f;
                    if (0 > n) f = Math.max(0, e[m].j - 100), l = !1;
                    else try {
                        upb(p, h, "req" + n + "_")
                    } catch (q) {
                        d && d(p)
                    }
                }
                if (l) {
                    d = h.join("&");
                    break a
                }
            }
            a = a.B.splice(0, c);
            b.qa = a;
            return d
        },
        npb = function(a) {
            a.j || a.V || (a.qc = 1, g.xf(a.JQ, a), a.qa = 0)
        },
        ipb = function(a) {
            if (a.j || a.V || 3 <= a.qa) return !1;
            a.qc++;
            a.V = j8((0, g.Wa)(a.JQ, a), ypb(a, a.qa));
            a.qa++;
            return !0
        },
        wpb = function(a) {
            null != a.Da && (g.La.clearTimeout(a.Da), a.Da = null)
        },
        Cpb = function(a) {
            a.j = new k8(a, a.C, "rpc", a.qc);
            null === a.K && (a.j.Ma = a.ea);
            a.j.ub = 0;
            var b = a.Ed.clone();
            g.il(b, "RID", "rpc");
            g.il(b, "SID", a.C);
            g.il(b, "AID", a.Za);
            g.il(b, "CI", a.Ua ? "0" : "1");
            !a.Ua && a.yd && g.il(b, "TO", a.yd);
            g.il(b, "TYPE", "xmlhttp");
            w8(a, b);
            a.K && a.ea && g.ml(b, a.K, a.ea);
            a.ib && a.j.setTimeout(a.ib);
            var c = a.j;
            a = a.Cc;
            c.Oa = 1;
            c.K = P7(b.clone());
            c.V = null;
            c.Ba = !0;
            Yob(c, a)
        },
        q8 = function(a) {
            null != a.ma && (g.La.clearTimeout(a.ma), a.ma = null)
        },
        gpb = function(a, b) {
            var c = null;
            if (a.j == b) {
                q8(a);
                wpb(a);
                a.j = null;
                var d = 2
            } else if (hpb(a.u, b)) c = b.qa, mpb(a.u, b), d = 1;
            else return;
            if (0 != a.rh)
                if (b.B)
                    if (1 == d) {
                        c = b.V ? b.V.length : 0;
                        b = Date.now() - b.Aa;
                        var e = a.Aa;
                        d = Sob();
                        d.dispatchEvent(new Vob(d, c, b, e));
                        t8(a)
                    } else npb(a);
            else {
                var f = b.Pb;
                e = b.getLastError();
                if (3 == e || 0 == e && 0 < f || !(1 == d && zpb(a, b) || 2 == d && ipb(a))) switch (c && 0 < c.length && (b = a.u, b.B = b.B.concat(c)), e) {
                    case 1:
                        s8(a, 5);
                        break;
                    case 4:
                        s8(a, 10);
                        break;
                    case 3:
                        s8(a, 6);
                        break;
                    default:
                        s8(a, 2)
                }
            }
        },
        ypb = function(a, b) {
            var c = a.If + Math.floor(Math.random() *
                a.ag);
            a.isActive() || (c *= 2);
            return c * b
        },
        s8 = function(a, b) {
            if (2 == b) {
                var c = null;
                a.D && (c = null);
                var d = (0, g.Wa)(a.i9, a);
                c || (c = new g.Pk("//www.google.com/images/cleardot.gif"), g.La.location && "http" == g.La.location.protocol || g.bl(c, "https"), P7(c));
                spb(c.toString(), d)
            } else i8(2);
            a.rh = 0;
            a.D && a.D.MQ(b);
            Dpb(a);
            xpb(a)
        },
        Dpb = function(a) {
            a.rh = 0;
            a.Pb = [];
            if (a.D) {
                var b = rpb(a.u);
                if (0 != b.length || 0 != a.B.length) g.Hb(a.Pb, b), g.Hb(a.Pb, a.B), a.u.B.length = 0, g.Gb(a.B), a.B.length = 0;
                a.D.LQ()
            }
        },
        Epb = function(a) {
            if (0 == a.rh) return a.Pb;
            var b = [];
            g.Hb(b, rpb(a.u));
            g.Hb(b, a.B);
            return b
        },
        lpb = function(a, b, c) {
            var d = g.jl(c);
            "" != d.j ? (b && g.cl(d, b + "." + d.j), g.dl(d, d.C)) : (d = g.La.location, d = Unb(d.protocol, b ? b + "." + d.hostname : d.hostname, +d.port, c));
            b = a.Ba;
            c = a.Ae;
            b && c && g.il(d, b, c);
            g.il(d, "VER", a.IQ);
            w8(a, d);
            return d
        },
        $ob = function(a, b, c) {
            if (b && !a.Oa) throw Error("Can't create secondary domain capable XhrIo object.");
            b = c && a.Ie && !a.ze ? new g.xj(new g.Kk({
                VX: !0
            })) : new g.xj(a.ze);
            b.J = a.Oa;
            return b
        },
        Fpb = function() {},
        Gpb = function() {
            if (g.Ue && !g.Ic(10)) throw Error("Environmental error: no available transport.");
        },
        y8 = function(a, b) {
            g.Cd.call(this);
            this.j = new vpb(b);
            this.D = a;
            this.u = b && b.L4 || null;
            a = b && b.K4 || null;
            b && b.x7a && (a ? a["X-Client-Protocol"] = "webchannel" : a = {
                "X-Client-Protocol": "webchannel"
            });
            this.j.ea = a;
            a = b && b.C8a || null;
            b && b.AV && (a ? a["X-WebChannel-Content-Type"] = b.AV : a = {
                "X-WebChannel-Content-Type": b.AV
            });
            b && b.VS && (a ? a["X-WebChannel-Client-Profile"] = b.VS : a = {
                "X-WebChannel-Client-Profile": b.VS
            });
            this.j.Ab = a;
            (a = b && b.B8a) && !g.cc(a) && (this.j.K = a);
            this.J = b && b.c9 || !1;
            this.C = b && b.o9a || !1;
            (b = b && b.Z3) && !g.cc(b) && (this.j.Ba = b, g.$c(this.u, b) && g.ed(this.u,
                b));
            this.B = new x8(this)
        },
        Hpb = function(a) {
            Pob.call(this);
            a.__headers__ && (this.headers = a.__headers__, this.statusCode = a.__status__, delete a.__headers__, delete a.__status__);
            var b = a.__sm__;
            b ? this.data = (this.j = g.Xc(b)) ? g.fd(b, this.j) : b : this.data = a
        },
        Ipb = function(a) {
            Qob.call(this);
            this.status = 1;
            this.errorCode = a
        },
        x8 = function(a) {
            this.j = a
        },
        Jpb = function(a, b) {
            this.u = a;
            this.j = b
        },
        Kpb = function(a) {
            return Epb(a.j).map(function(b) {
                b = b.map;
                "__data__" in b && (b = b.__data__, b = a.u.C ? Tnb(b) : b);
                return b
            })
        },
        z8 = function(a, b) {
            if ("function" !== typeof a) throw Error("Fn must not be null and must be a function");
            return g.La.setTimeout(function() {
                a()
            }, b)
        },
        B8 = function(a) {
            A8.dispatchEvent(new Lpb(A8, a))
        },
        Lpb = function(a) {
            g.tb.call(this, "statevent", a)
        },
        C8 = function(a, b, c, d) {
            this.j = a;
            this.C = b;
            this.K = c;
            this.J = d || 1;
            this.u = 45E3;
            this.B = new g.nl(this);
            this.D = new g.Kf;
            this.D.setInterval(250)
        },
        Npb = function(a, b, c) {
            a.Tw = 1;
            a.Dr = P7(b.clone());
            a.du = c;
            a.Ba = !0;
            Mpb(a, null)
        },
        Opb = function(a, b, c, d, e) {
            a.Tw = 1;
            a.Dr = P7(b.clone());
            a.du = null;
            a.Ba = c;
            e && (a.zX = !1);
            Mpb(a, d)
        },
        Mpb = function(a, b) {
            a.Sw = Date.now();
            D8(a);
            a.Fr = a.Dr.clone();
            Q7(a.Fr, "t", a.J);
            a.yE = 0;
            a.Si = a.j.eJ(a.j.BA() ? b : null);
            0 < a.cJ && (a.wE = new f8((0, g.Wa)(a.PQ, a, a.Si), a.cJ));
            a.B.Sa(a.Si, "readystatechange", a.k_);
            b = a.au ? g.hd(a.au) : {};
            a.du ? (a.xE = "POST", b["Content-Type"] = "application/x-www-form-urlencoded", a.Si.send(a.Fr, a.xE, a.du, b)) : (a.xE = "GET", a.zX && !g.Jc && (b.Connection = "close"), a.Si.send(a.Fr, a.xE, null, b));
            a.j.un(1)
        },
        Rpb = function(a, b) {
            var c = a.yE,
                d = b.indexOf("\n", c);
            if (-1 == d) return Ppb;
            c = Number(b.substring(c, d));
            if (isNaN(c)) return Qpb;
            d += 1;
            if (d + c > b.length) return Ppb;
            b = b.slice(d, d + c);
            a.yE = d + c;
            return b
        },
        Tpb = function(a, b) {
            a.Sw = Date.now();
            D8(a);
            var c = b ? window.location.hostname : "";
            a.Fr = a.Dr.clone();
            g.il(a.Fr, "DOMAIN", c);
            g.il(a.Fr, "t", a.J);
            try {
                a.Jn = new ActiveXObject("htmlfile")
            } catch (m) {
                E8(a);
                a.Er = 7;
                B8(22);
                F8(a);
                return
            }
            var d = "<html><body>";
            if (b) {
                var e = "";
                for (b = 0; b < c.length; b++) {
                    var f = c.charAt(b);
                    if ("<" == f) f = e + "\\x3c";
                    else if (">" == f) f = e + "\\x3e";
                    else {
                        if (f in G8) f = G8[f];
                        else if (f in Spb) f = G8[f] = Spb[f];
                        else {
                            var h = f.charCodeAt(0);
                            if (31 < h && 127 > h) var l = f;
                            else {
                                if (256 > h) {
                                    if (l = "\\x", 16 > h || 256 < h) l += "0"
                                } else l = "\\u", 4096 > h && (l += "0");
                                l += h.toString(16).toUpperCase()
                            }
                            f =
                                G8[f] = l
                        }
                        f = e + f
                    }
                    e = f
                }
                d += '<script>document.domain="' + e + '"\x3c/script>'
            }
            d += "</body></html>";
            g.Sd("b/12014412");
            c = g.ke(d);
            a.Jn.open();
            a.Jn.write(g.je(c));
            a.Jn.close();
            a.Jn.parentWindow.m = (0, g.Wa)(a.G7, a);
            a.Jn.parentWindow.d = (0, g.Wa)(a.DW, a, !0);
            a.Jn.parentWindow.rpcClose = (0, g.Wa)(a.DW, a, !1);
            c = a.Jn.createElement("DIV");
            a.Jn.parentWindow.document.body.appendChild(c);
            d = g.de(a.Fr.toString());
            d = g.De(g.Xd(d));
            g.Sd("b/12014412");
            d = g.ke('<iframe src="' + d + '"></iframe>');
            g.Zba(c, d);
            a.j.un(1)
        },
        D8 = function(a) {
            a.dJ =
                Date.now() + a.u;
            Upb(a, a.u)
        },
        Upb = function(a, b) {
            if (null != a.Uw) throw Error("WatchDog timer not null");
            a.Uw = z8((0, g.Wa)(a.j_, a), b)
        },
        Vpb = function(a) {
            a.Uw && (g.La.clearTimeout(a.Uw), a.Uw = null)
        },
        F8 = function(a) {
            a.j.Yg() || a.Zt || a.j.zE(a)
        },
        E8 = function(a) {
            Vpb(a);
            g.kb(a.wE);
            a.wE = null;
            a.D.stop();
            a.B.Gf();
            if (a.Si) {
                var b = a.Si;
                a.Si = null;
                b.abort();
                b.dispose()
            }
            a.Jn && (a.Jn = null)
        },
        Wpb = function(a, b) {
            try {
                a.j.QQ(a, b), a.j.un(4)
            } catch (c) {}
        },
        Ypb = function(a, b, c, d, e) {
            if (0 == d) c(!1);
            else {
                var f = e || 0;
                d--;
                Xpb(a, b, function(h) {
                    h ? c(!0) : g.La.setTimeout(function() {
                        Ypb(a, b, c, d, f)
                    }, f)
                })
            }
        },
        Xpb = function(a, b, c) {
            var d = new Image;
            d.onload = function() {
                try {
                    H8(d), c(!0)
                } catch (e) {}
            };
            d.onerror = function() {
                try {
                    H8(d), c(!1)
                } catch (e) {}
            };
            d.onabort = function() {
                try {
                    H8(d), c(!1)
                } catch (e) {}
            };
            d.ontimeout = function() {
                try {
                    H8(d), c(!1)
                } catch (e) {}
            };
            g.La.setTimeout(function() {
                if (d.ontimeout) d.ontimeout()
            }, b);
            d.src = a
        },
        H8 = function(a) {
            a.onload = null;
            a.onerror = null;
            a.onabort = null;
            a.ontimeout = null
        },
        Zpb = function(a) {
            this.j = a;
            this.u = new g8
        },
        $pb = function(a) {
            var b = I8(a.j, a.VA, "/mail/images/cleardot.gif");
            P7(b);
            Ypb(b.toString(), 5E3, (0, g.Wa)(a.Y1, a), 3, 2E3);
            a.un(1)
        },
        aqb = function(a) {
            var b = a.j.J;
            if (null != b) B8(5), b ? (B8(11), J8(a.j, a, !1)) : (B8(12), J8(a.j, a, !0));
            else if (a.vj = new C8(a), a.vj.au = a.fJ, b = a.j, b = I8(b, b.BA() ? a.AA : null, a.gJ), B8(5), !g.Ue || g.Ic(10)) Q7(b, "TYPE", "xmlhttp"), Opb(a.vj, b, !1, a.AA, !1);
            else {
                Q7(b, "TYPE", "html");
                var c = a.vj;
                a = !!a.AA;
                c.Tw = 3;
                c.Dr = P7(b.clone());
                Tpb(c, a)
            }
        },
        bqb = function(a, b, c) {
            this.j = 1;
            this.u = [];
            this.B = [];
            this.D = new g8;
            this.ea = a || null;
            this.J = null != b ? b : null;
            this.V = c || !1
        },
        cqb = function(a, b) {
            this.j = a;
            this.map = b;
            this.context = null
        },
        dqb = function(a, b, c, d) {
            g.tb.call(this, "timingevent", a);
            this.size = b;
            this.Hz = d
        },
        eqb = function(a) {
            g.tb.call(this, "serverreachability", a)
        },
        gqb = function(a) {
            a.l_(1, 0);
            a.AE = I8(a, null, a.hJ);
            fqb(a)
        },
        hqb = function(a) {
            a.Ur && (a.Ur.abort(), a.Ur = null);
            a.Ig && (a.Ig.cancel(), a.Ig = null);
            a.Jp && (g.La.clearTimeout(a.Jp), a.Jp = null);
            K8(a);
            a.Ej && (a.Ej.cancel(), a.Ej = null);
            a.Gr && (g.La.clearTimeout(a.Gr), a.Gr = null)
        },
        iqb = function(a, b) {
            if (0 == a.j) throw Error("Invalid operation: sending map when state is closed");
            a.u.push(new cqb(a.m_++, b));
            2 != a.j && 3 != a.j || fqb(a)
        },
        jqb = function(a) {
            var b = 0;
            a.Ig && b++;
            a.Ej && b++;
            return b
        },
        fqb = function(a) {
            a.Ej || a.Gr || (a.Gr = z8((0, g.Wa)(a.UQ, a), 0), a.Ww = 0)
        },
        mqb = function(a, b) {
            if (1 == a.j) {
                if (!b) {
                    a.DA = Math.floor(1E5 * Math.random());
                    b = a.DA++;
                    var c = new C8(a, "", b);
                    c.au = a.Pn;
                    var d = kqb(a),
                        e = a.AE.clone();
                    g.il(e, "RID", b);
                    g.il(e, "CVER", "1");
                    L8(a, e);
                    Npb(c, e, d);
                    a.Ej = c;
                    a.j = 2
                }
            } else 3 == a.j && (b ? lqb(a, b) : 0 == a.u.length || a.Ej || lqb(a))
        },
        lqb = function(a, b) {
            if (b)
                if (6 < a.fu) {
                    a.u = a.B.concat(a.u);
                    a.B.length = 0;
                    var c = a.DA - 1;
                    b = kqb(a)
                } else c = b.K, b = b.du;
            else c = a.DA++, b = kqb(a);
            var d = a.AE.clone();
            g.il(d, "SID", a.C);
            g.il(d, "RID", c);
            g.il(d, "AID", a.Xw);
            L8(a, d);
            c = new C8(a, a.C, c, a.Ww + 1);
            c.au = a.Pn;
            c.setTimeout(1E4 + Math.round(1E4 * Math.random()));
            a.Ej = c;
            Npb(c, d, b)
        },
        L8 = function(a, b) {
            a.xi && (a = a.xi.YQ()) && g.Sc(a, function(c, d) {
                g.il(b, d, c)
            })
        },
        kqb = function(a) {
            var b = Math.min(a.u.length, 1E3),
                c = ["count=" + b];
            if (6 < a.fu && 0 < b) {
                var d = a.u[0].j;
                c.push("ofs=" + d)
            } else d = 0;
            for (var e = {}, f = 0; f < b; e = {
                    Dw: e.Dw
                }, f++) {
                e.Dw = a.u[f].j;
                var h = a.u[f].map;
                e.Dw = 6 >= a.fu ? f : e.Dw - d;
                try {
                    g.Sc(h, function(l) {
                        return function(m, n) {
                            c.push("req" + l.Dw + "_" + n + "=" + encodeURIComponent(m))
                        }
                    }(e))
                } catch (l) {
                    c.push("req" + e.Dw + "_type=" + encodeURIComponent("_badmap"))
                }
            }
            a.B = a.B.concat(a.u.splice(0, b));
            return c.join("&")
        },
        nqb = function(a) {
            a.Ig || a.Jp || (a.K = 1, a.Jp = z8((0, g.Wa)(a.TQ, a), 0), a.Vw = 0)
        },
        pqb = function(a) {
            if (a.Ig || a.Jp || 3 <= a.Vw) return !1;
            a.K++;
            a.Jp = z8((0, g.Wa)(a.TQ, a), oqb(a, a.Vw));
            a.Vw++;
            return !0
        },
        J8 = function(a, b, c) {
            a.oI = null == a.J ? c : !a.J;
            a.Qn = b.Ip;
            a.V || gqb(a)
        },
        K8 = function(a) {
            null != a.ju && (g.La.clearTimeout(a.ju), a.ju = null)
        },
        oqb = function(a, b) {
            var c = 5E3 + Math.floor(1E4 * Math.random());
            a.isActive() || (c *= 2);
            return c * b
        },
        M8 = function(a, b) {
            if (2 == b || 9 == b) {
                var c = null;
                a.xi && (c = null);
                var d = (0, g.Wa)(a.h9, a);
                c || (c = new g.Pk("//www.google.com/images/cleardot.gif"), P7(c));
                Xpb(c.toString(), 1E4, d)
            } else B8(2);
            qqb(a, b)
        },
        qqb = function(a, b) {
            a.j = 0;
            a.xi && a.xi.VQ(b);
            rqb(a);
            hqb(a)
        },
        rqb = function(a) {
            a.j = 0;
            a.Qn = -1;
            if (a.xi)
                if (0 == a.B.length && 0 == a.u.length) a.xi.iJ();
                else {
                    var b = g.Gb(a.B),
                        c = g.Gb(a.u);
                    a.B.length = 0;
                    a.u.length = 0;
                    a.xi.iJ(b, c)
                }
        },
        I8 = function(a, b, c) {
            var d = g.jl(c);
            if ("" != d.j) b && g.cl(d, b + "." + d.j), g.dl(d, d.C);
            else {
                var e = window.location;
                d = Unb(e.protocol, b ? b + "." + e.hostname : e.hostname, +e.port, c)
            }
            a.CA && g.Sc(a.CA, function(f, h) {
                g.il(d, h, f)
            });
            g.il(d, "VER", a.fu);
            L8(a, d);
            return d
        },
        sqb = function() {},
        tqb = function() {
            this.j = [];
            this.u = []
        },
        uqb = function(a) {
            g.tb.call(this, "channelMessage");
            this.message = a
        },
        vqb = function(a) {
            g.tb.call(this, "channelError");
            this.error = a
        },
        wqb = function(a, b) {
            this.action = a;
            this.params = b || {}
        },
        N8 = function(a, b) {
            g.D.call(this);
            this.j = new g.Qp(this.y7, 0, this);
            g.J(this, this.j);
            this.Ii = 5E3;
            this.u = 0;
            if ("function" === typeof a) b && (a = (0, g.Wa)(a, b));
            else if (a && "function" === typeof a.handleEvent) a = (0, g.Wa)(a.handleEvent, a);
            else throw Error("Invalid listener argument");
            this.B = a
        },
        xqb = function(a, b, c, d, e) {
            c = void 0 === c ? !1 : c;
            d = void 0 === d ? function() {
                return ""
            } : d;
            e = void 0 === e ? !1 : e;
            this.Aa = a;
            this.K = b;
            this.B = new g.tq;
            this.u = new N8(this.D8, this);
            this.j = null;
            this.ma = !1;
            this.J = null;
            this.ea = "";
            this.V = this.D = 0;
            this.C = [];
            this.Oa = c;
            this.qa = d;
            this.Ua = e;
            this.Ma = new Vnb;
            this.Da = new Xnb;
            this.Ja = new Znb;
            this.Ba = new aob;
            this.Za = new cob;
            this.fb = new dob
        },
        yqb = function(a) {
            if (a.j) {
                var b = a.qa(),
                    c = a.j.Pn || {};
                b ? c["x-youtube-lounge-xsrf-token"] = b : delete c["x-youtube-lounge-xsrf-token"];
                a.j.Pn = c
            }
        },
        O8 = function(a) {
            this.port = this.domain = "";
            this.j = "/api/lounge";
            this.u = !0;
            a = a || document.location.href;
            var b = Number(g.cj(4, a)) || "";
            b && (this.port = ":" + b);
            this.domain = g.dj(a) || "";
            a = g.kc();
            0 <= a.search("MSIE") && (a = a.match(/MSIE ([\d.]+)/)[1], 0 > g.jc(a, "10.0") && (this.u = !1))
        },
        P8 = function(a, b) {
            var c = a.j;
            a.u && (c = "https://" + a.domain + a.port + a.j);
            return g.jj(c + b, {})
        },
        zqb = function(a, b, c, d, e) {
            a = {
                format: "JSON",
                method: "POST",
                context: a,
                timeout: 5E3,
                withCredentials: !1,
                onSuccess: g.Xa(a.C, d, !0),
                onError: g.Xa(a.B, e),
                onTimeout: g.Xa(a.D, e)
            };
            c && (a.postParams = c, a.headers = {
                "Content-Type": "application/x-www-form-urlencoded"
            });
            return g.bz(b, a)
        },
        Aqb = function(a, b) {
            g.Cd.call(this);
            var c = this;
            this.Ad = a();
            this.Ad.subscribe("handlerOpened", this.q_, this);
            this.Ad.subscribe("handlerClosed", this.o_, this);
            this.Ad.subscribe("handlerError", function(d, e) {
                c.onError(e)
            });
            this.Ad.subscribe("handlerMessage", this.p_, this);
            this.j = b
        },
        Bqb = function(a, b, c) {
            var d = this;
            c = void 0 === c ? function() {
                return ""
            } : c;
            var e = void 0 === e ? new Gpb : e;
            var f = void 0 === f ? new g.tq : f;
            this.pathPrefix = a;
            this.j = b;
            this.Aa = c;
            this.D = f;
            this.V = null;
            this.ea = this.K = 0;
            this.channel = null;
            this.J = 0;
            this.B = new N8(function() {
                d.B.isActive();
                var h;
                0 === (null == (h = d.channel) ? void 0 : jpb((new Jpb(h, h.j)).j.u)) && d.connect(d.V, d.K)
            });
            this.C = {};
            this.u = {};
            this.ma = !1;
            this.logger = null;
            this.qa = [];
            this.Lg = void 0;
            this.Ma = new Vnb;
            this.Da = new Xnb;
            this.Ja = new Znb;
            this.Ba = new aob
        },
        Cqb = function(a) {
            g.pd(a.channel, "m", function() {
                a.J = 3;
                a.B.reset();
                a.V = null;
                a.K = 0;
                for (var b = g.v(a.qa), c = b.next(); !c.done; c = b.next()) c = c.value, a.channel && a.channel.send(c);
                a.qa = [];
                a.oa("webChannelOpened");
                Wnb(a.Ma, "WEB_CHANNEL")
            });
            g.pd(a.channel, "n", function() {
                a.J = 0;
                a.B.isActive() || a.oa("webChannelClosed");
                var b, c = null == (b = a.channel) ? void 0 : Kpb(new Jpb(b, b.j));
                c && (a.qa = [].concat(g.oa(c)));
                Ynb(a.Da, "WEB_CHANNEL")
            });
            g.pd(a.channel, "p", function(b) {
                var c = b.data;
                "gracefulReconnect" === c[0] ? (a.B.start(), a.channel && a.channel.close()) : a.oa("webChannelMessage", new wqb(c[0], c[1]));
                a.Lg = b.statusCode;
                $nb(a.Ja, "WEB_CHANNEL")
            });
            g.pd(a.channel, "o", function() {
                401 === a.Lg || a.B.start();
                a.oa("webChannelError");
                bob(a.Ba, "WEB_CHANNEL")
            })
        },
        Dqb = function(a) {
            var b = a.Aa();
            b ? a.C["x-youtube-lounge-xsrf-token"] = b : delete a.C["x-youtube-lounge-xsrf-token"]
        },
        Eqb = function(a) {
            g.Cd.call(this);
            this.j = a();
            this.j.subscribe("webChannelOpened", this.t_, this);
            this.j.subscribe("webChannelClosed", this.r_, this);
            this.j.subscribe("webChannelError", this.onError, this);
            this.j.subscribe("webChannelMessage", this.s_, this)
        },
        Fqb = function(a, b, c, d, e) {
            function f() {
                return new xqb(P8(a, "/bc"), b, !1, c, d)
            }
            c = void 0 === c ? function() {
                return ""
            } : c;
            return g.Cy("enable_mdx_web_channel_desktop") ? new Eqb(function() {
                return new Bqb(P8(a, "/wc"), b, c)
            }) : new Aqb(f, e)
        },
        Jqb = function() {
            var a = Gqb;
            Hqb();
            Q8.push(a);
            Iqb()
        },
        R8 = function(a, b) {
            Hqb();
            var c = Kqb(a, String(b));
            0 == Q8.length ? Lqb(c) : (Iqb(), g.Wb(Q8, function(d) {
                d(c)
            }))
        },
        S8 = function(a) {
            R8("CP", a)
        },
        Hqb = function() {
            Q8 || (Q8 = g.Na("yt.mdx.remote.debug.handlers_") || [], g.Ma("yt.mdx.remote.debug.handlers_", Q8))
        },
        Lqb = function(a) {
            var b = (T8 + 1) % 50;
            T8 = b;
            U8[b] = a;
            V8 || (V8 = 49 == b)
        },
        Iqb = function() {
            var a = Q8;
            if (U8[0]) {
                var b = V8 ? T8 : -1;
                do {
                    b = (b + 1) % 50;
                    var c = U8[b];
                    g.Wb(a, function(d) {
                        d(c)
                    })
                } while (b != T8);
                U8 = Array(50);
                T8 = -1;
                V8 = !1
            }
        },
        Kqb = function(a, b) {
            var c = (Date.now() - Mqb) / 1E3;
            c.toFixed && (c = c.toFixed(3));
            var d = [];
            d.push("[", c + "s", "] ");
            d.push("[", "yt.mdx.remote", "] ");
            d.push(a + ": " + b, "\n");
            return d.join("")
        },
        W8 = function(a) {
            g.yE.call(this);
            this.J = a;
            this.screens = []
        },
        Nqb = function(a, b) {
            var c = a.get(b.uuid) || a.get(b.id);
            if (c) return a = c.name, c.id = b.id || c.id, c.name = b.name, c.token = b.token, c.uuid = b.uuid || c.uuid, c.name != a;
            a.screens.push(b);
            return !0
        },
        Oqb = function(a, b) {
            var c = a.screens.length != b.length;
            a.screens = g.fo(a.screens, function(f) {
                return !!pob(b, f)
            });
            for (var d = 0, e = b.length; d < e; d++) c = Nqb(a, b[d]) || c;
            return c
        },
        Pqb = function(a, b) {
            var c = a.screens.length;
            a.screens = g.fo(a.screens, function(d) {
                return !(d || b ? !d != !b ? 0 : d.id == b.id : 1)
            });
            return a.screens.length < c
        },
        Qqb = function(a, b, c, d, e) {
            g.yE.call(this);
            this.B = a;
            this.K = b;
            this.C = c;
            this.J = d;
            this.D = e;
            this.u = 0;
            this.j = null;
            this.Hc = NaN
        },
        Y8 = function(a) {
            W8.call(this, "LocalScreenService");
            this.u = a;
            this.j = NaN;
            X8(this);
            this.info("Initializing with " + mob(this.screens))
        },
        Rqb = function(a) {
            if (a.screens.length) {
                var b = g.qm(a.screens, function(d) {
                        return d.id
                    }),
                    c = P8(a.u, "/pairing/get_lounge_token_batch");
                zqb(a.u, c, {
                    screen_ids: b.join(",")
                }, (0, g.Wa)(a.A3, a), (0, g.Wa)(a.z3, a))
            }
        },
        X8 = function(a) {
            if (g.Cy("deprecate_pair_servlet_enabled")) return Oqb(a, []);
            var b = lob(wob());
            b = g.fo(b, function(c) {
                return !c.uuid
            });
            return Oqb(a, b)
        },
        Z8 = function(a, b) {
            yob(g.qm(a.screens, job));
            b && xob()
        },
        Tqb = function(a, b) {
            g.yE.call(this);
            this.J = b;
            b = (b = g.mA("yt-remote-online-screen-ids") || "") ? b.split(",") : [];
            for (var c = {}, d = this.J(), e = d.length, f = 0; f < e; ++f) {
                var h = d[f].id;
                c[h] = g.Bb(b, h)
            }
            this.j = c;
            this.D = a;
            this.B = this.C = NaN;
            this.u = null;
            Sqb("Initialized with " + g.Wi(this.j))
        },
        Uqb = function(a, b, c) {
            var d = P8(a.D, "/pairing/get_screen_availability");
            zqb(a.D, d, {
                lounge_token: b.token
            }, (0, g.Wa)(function(e) {
                e = e.screens || [];
                for (var f = e.length, h = 0; h < f; ++h)
                    if (e[h].loungeToken == b.token) {
                        c("online" == e[h].status);
                        return
                    }
                c(!1)
            }, a), (0, g.Wa)(function() {
                c(!1)
            }, a))
        },
        Wqb = function(a, b) {
            a: if (Rnb(b) != Rnb(a.j)) var c = !1;
                else {
                    c = g.Zc(b);
                    for (var d = c.length, e = 0; e < d; ++e)
                        if (!a.j[c[e]]) {
                            c = !1;
                            break a
                        }
                    c = !0
                }c || (Sqb("Updated online screens: " + g.Wi(a.j)), a.j = b, a.oa("screenChange"));Vqb(a)
        },
        $8 = function(a) {
            isNaN(a.B) || g.Zy(a.B);
            a.B = g.Xy((0, g.Wa)(a.IO, a), 0 < a.C && a.C < g.Ya() ? 2E4 : 1E4)
        },
        Sqb = function(a) {
            R8("OnlineScreenService", a)
        },
        Xqb = function(a) {
            var b = {};
            g.Wb(a.J(), function(c) {
                c.token ? b[c.token] = c.id : this.Wf("Requesting availability of screen w/o lounge token.")
            });
            return b
        },
        Vqb = function(a) {
            a = g.Zc(g.Tc(a.j, function(b) {
                return b
            }));
            g.Tb(a);
            a.length ? g.lA("yt-remote-online-screen-ids", a.join(","), 60) : g.nA("yt-remote-online-screen-ids")
        },
        a9 = function(a, b) {
            b = void 0 === b ? !1 : b;
            W8.call(this, "ScreenService");
            this.C = a;
            this.K = b;
            this.j = this.u = null;
            this.B = [];
            this.D = {};
            Yqb(this)
        },
        $qb = function(a, b, c, d, e, f) {
            a.info("getAutomaticScreenByIds " + c + " / " + b);
            c || (c = a.D[b]);
            var h = a.Ak(),
                l = c ? X7(h, c) : null;
            c && (a.K || l) || (l = X7(h, b));
            if (l) {
                l.uuid = b;
                var m = b9(a, l);
                Uqb(a.j, m, function(n) {
                    e(n ? m : null)
                })
            } else c ? Zqb(a, c, (0, g.Wa)(function(n) {
                var p = b9(this, new U7({
                    name: d,
                    screenId: c,
                    loungeToken: n,
                    dialId: b || ""
                }));
                Uqb(this.j, p, function(q) {
                    e(q ? p : null)
                })
            }, a), f) : e(null)
        },
        arb = function(a, b) {
            for (var c = a.screens.length, d = 0; d < c; ++d)
                if (a.screens[d].name == b) return a.screens[d];
            return null
        },
        brb = function(a, b, c) {
            Uqb(a.j, b, c)
        },
        Zqb = function(a, b, c, d) {
            a.info("requestLoungeToken_ for " + b);
            var e = {
                postParams: {
                    screen_ids: b
                },
                method: "POST",
                context: a,
                onSuccess: function(f, h) {
                    f = h && h.screens || [];
                    f[0] && f[0].screenId == b ? c(f[0].loungeToken) : d(Error("Missing lounge token in token response"))
                },
                onError: function() {
                    d(Error("Request screen lounge token failed"))
                }
            };
            g.bz(P8(a.C, "/pairing/get_lounge_token_batch"), e)
        },
        crb = function(a) {
            a.screens = a.u.Ak();
            var b = a.D,
                c = {},
                d;
            for (d in b) c[b[d]] = d;
            b = a.screens.length;
            for (d = 0; d < b; ++d) {
                var e = a.screens[d];
                e.uuid = c[e.id] || ""
            }
            a.info("Updated manual screens: " + mob(a.screens))
        },
        Yqb = function(a) {
            drb(a);
            a.u = new Y8(a.C);
            a.u.subscribe("screenChange", (0, g.Wa)(a.J3, a));
            crb(a);
            a.K || (a.B = lob(g.mA("yt-remote-automatic-screen-cache") || []));
            drb(a);
            a.info("Initializing automatic screens: " + mob(a.B));
            a.j = new Tqb(a.C, (0, g.Wa)(a.Ak, a, !0));
            a.j.subscribe("screenChange", (0, g.Wa)(function() {
                this.oa("onlineScreenChange")
            }, a))
        },
        b9 = function(a, b) {
            var c = a.get(b.id);
            c ? (c.uuid = b.uuid, b = c) : ((c = X7(a.B, b.uuid)) ? (c.id = b.id, c.token = b.token, b = c) : a.B.push(b), a.K || erb(a));
            drb(a);
            a.D[b.uuid] = b.id;
            g.lA("yt-remote-device-id-map", a.D, 31536E3);
            return b
        },
        erb = function(a) {
            a = g.fo(a.B, function(b) {
                return "shortLived" != b.idType
            });
            g.lA("yt-remote-automatic-screen-cache", g.qm(a, job))
        },
        drb = function(a) {
            a.D = g.mA("yt-remote-device-id-map") || {}
        },
        c9 = function(a, b, c) {
            g.yE.call(this);
            this.Ba = c;
            this.C = a;
            this.u = b;
            this.j = null
        },
        d9 = function(a, b) {
            a.j = b;
            a.oa("sessionScreen", a.j)
        },
        frb = function(a, b) {
            a.j && (a.j.token = b, b9(a.C, a.j));
            a.oa("sessionScreen", a.j)
        },
        e9 = function(a, b) {
            R8(a.Ba, b)
        },
        f9 = function(a, b, c) {
            c9.call(this, a, b, "CastSession");
            var d = this;
            this.config_ = c;
            this.B = null;
            this.qa = (0, g.Wa)(this.y_, this);
            this.Da = (0, g.Wa)(this.P7, this);
            this.ma = g.Xy(function() {
                grb(d, null)
            }, 12E4);
            this.K = this.D = this.J = this.V = 0;
            this.Aa = !1;
            this.ea = "unknown"
        },
        irb = function(a, b) {
            g.Zy(a.K);
            a.K = 0;
            0 == b ? hrb(a) : a.K = g.Xy(function() {
                hrb(a)
            }, b)
        },
        hrb = function(a) {
            jrb(a, "getLoungeToken");
            g.Zy(a.D);
            a.D = g.Xy(function() {
                krb(a, null)
            }, 3E4)
        },
        jrb = function(a, b) {
            a.info("sendYoutubeMessage_: " + b + " " + g.Wi());
            var c = {};
            c.type = b;
            a.B ? a.B.sendMessage("urn:x-cast:com.google.youtube.mdx", c, function() {}, (0, g.Wa)(function() {
                e9(this, "Failed to send message: " + b + ".")
            }, a)) : e9(a, "Sending yt message without session: " + g.Wi(c))
        },
        lrb = function(a, b) {
            b ? (a.info("onConnectedScreenId_: Received screenId: " + b), a.j && a.j.id == b || a.dU(b, function(c) {
                d9(a, c)
            }, function() {
                return a.jj()
            }, 5)) : a.jj(Error("Waiting for session status timed out."))
        },
        nrb = function(a, b, c) {
            a.info("onConnectedScreenData_: Received screenData: " + JSON.stringify(b));
            var d = new U7(b);
            mrb(a, d, function(e) {
                e ? (a.Aa = !0, b9(a.C, d), d9(a, d), a.ea = "unknown", irb(a, c)) : (g.Hy(Error("CastSession, RemoteScreen from screenData: " + JSON.stringify(b) + " is not online.")), a.jj())
            }, 5)
        },
        grb = function(a, b) {
            g.Zy(a.ma);
            a.ma = 0;
            b ? a.config_.enableCastLoungeToken && b.loungeToken ? b.deviceId ? a.j && a.j.uuid == b.deviceId || (b.loungeTokenRefreshIntervalMs ? nrb(a, {
                    name: a.u.friendlyName,
                    screenId: b.screenId,
                    loungeToken: b.loungeToken,
                    dialId: b.deviceId,
                    screenIdType: "shortLived"
                }, b.loungeTokenRefreshIntervalMs) : (g.Hy(Error("No loungeTokenRefreshIntervalMs presents in mdxSessionStatusData: " + JSON.stringify(b) + ".")), lrb(a, b.screenId))) : (g.Hy(Error("No device id presents in mdxSessionStatusData: " + JSON.stringify(b) + ".")), lrb(a, b.screenId)) :
                lrb(a, b.screenId) : a.jj(Error("Waiting for session status timed out."))
        },
        krb = function(a, b) {
            g.Zy(a.D);
            a.D = 0;
            var c = null;
            if (b)
                if (b.loungeToken) {
                    var d;
                    (null == (d = a.j) ? void 0 : d.token) == b.loungeToken && (c = "staleLoungeToken")
                } else c = "missingLoungeToken";
            else c = "noLoungeTokenResponse";
            c ? (a.info("Did not receive a new lounge token in onLoungeToken_ with data: " + (JSON.stringify(b) + ", error: " + c)), a.ea = c, irb(a, 3E4)) : (frb(a, b.loungeToken), a.Aa = !1, a.ea = "unknown", irb(a, b.loungeTokenRefreshIntervalMs))
        },
        mrb = function(a, b, c, d) {
            g.Zy(a.J);
            a.J = 0;
            brb(a.C, b, function(e) {
                e || 0 > d ? c(e) : a.J = g.Xy(function() {
                    mrb(a, b, c, d - 1)
                }, 300)
            })
        },
        orb = function(a) {
            g.Zy(a.V);
            a.V = 0;
            g.Zy(a.J);
            a.J = 0;
            g.Zy(a.ma);
            a.ma = 0;
            g.Zy(a.D);
            a.D = 0;
            g.Zy(a.K);
            a.K = 0
        },
        g9 = function(a, b, c, d) {
            c9.call(this, a, b, "DialSession");
            this.config_ = d;
            this.B = this.V = null;
            this.Da = "";
            this.Oa = c;
            this.Ma = null;
            this.ma = function() {};
            this.ea = NaN;
            this.Ja = (0, g.Wa)(this.z_, this);
            this.D = function() {};
            this.K = this.J = 0;
            this.qa = !1;
            this.Aa = "unknown"
        },
        h9 = function(a) {
            var b;
            return !!(a.config_.enableDialLoungeToken && (null == (b = a.B) ? 0 : b.getDialAppInfo))
        },
        prb = function(a) {
            a.D = a.C.aR(a.Da, a.u.label, a.u.friendlyName, h9(a), function(b, c) {
                a.D = function() {};
                a.qa = !0;
                d9(a, b);
                "shortLived" == b.idType && 0 < c && i9(a, c)
            }, function(b) {
                a.D = function() {};
                a.jj(b)
            })
        },
        qrb = function(a) {
            var b = {};
            b.pairingCode = a.Da;
            b.theme = a.Oa;
            Aob() && (b.env_useStageMdx = 1);
            return g.ij(b)
        },
        rrb = function(a) {
            return new Promise(function(b) {
                a.Da = nob();
                if (a.Ma) {
                    var c = new chrome.cast.DialLaunchResponse(!0, qrb(a));
                    b(c);
                    prb(a)
                } else a.ma = function() {
                    g.Zy(a.ea);
                    a.ma = function() {};
                    a.ea = NaN;
                    var d = new chrome.cast.DialLaunchResponse(!0, qrb(a));
                    b(d);
                    prb(a)
                }, a.ea = g.Xy(function() {
                    a.ma()
                }, 100)
            })
        },
        trb = function(a, b, c) {
            a.info("initOnConnectedScreenDataPromise_: Received screenData: " + JSON.stringify(b));
            var d = new U7(b);
            return (new Promise(function(e) {
                srb(a, d, function(f) {
                    f ? (a.qa = !0, b9(a.C, d), d9(a, d), i9(a, c)) : g.Hy(Error("DialSession, RemoteScreen from screenData: " + JSON.stringify(b) + " is not online."));
                    e(f)
                }, 5)
            })).then(function(e) {
                return e ? new chrome.cast.DialLaunchResponse(!1) : rrb(a)
            })
        },
        urb = function(a, b) {
            var c = a.V.receiver.label,
                d = a.u.friendlyName;
            return (new Promise(function(e) {
                $qb(a.C, c, b, d, function(f) {
                    f && f.token && d9(a, f);
                    e(f)
                }, function(f) {
                    e9(a, "Failed to get DIAL screen: " + f);
                    e(null)
                })
            })).then(function(e) {
                return e && e.token ? new chrome.cast.DialLaunchResponse(!1) : rrb(a)
            })
        },
        srb = function(a, b, c, d) {
            g.Zy(a.J);
            a.J = 0;
            brb(a.C, b, function(e) {
                e || 0 > d ? c(e) : a.J = g.Xy(function() {
                    srb(a, b, c, d - 1)
                }, 300)
            })
        },
        i9 = function(a, b) {
            a.info("getDialAppInfoWithTimeout_ " + b);
            h9(a) && (g.Zy(a.K), a.K = 0, 0 == b ? vrb(a) : a.K = g.Xy(function() {
                vrb(a)
            }, b))
        },
        vrb = function(a) {
            h9(a) && a.B.getDialAppInfo(function(b) {
                a.info("getDialAppInfo dialLaunchData: " + JSON.stringify(b));
                b = b.extraData || {};
                var c = null;
                if (b.loungeToken) {
                    var d;
                    (null == (d = a.j) ? void 0 : d.token) == b.loungeToken && (c = "staleLoungeToken")
                } else c = "missingLoungeToken";
                c ? (a.Aa = c, i9(a, 3E4)) : (a.qa = !1, a.Aa = "unknown", frb(a, b.loungeToken), i9(a, b.loungeTokenRefreshIntervalMs))
            }, function(b) {
                a.info("getDialAppInfo error: " + b);
                a.Aa = "noLoungeTokenResponse";
                i9(a, 3E4)
            })
        },
        wrb = function(a) {
            g.Zy(a.J);
            a.J = 0;
            g.Zy(a.K);
            a.K = 0;
            a.D();
            a.D = function() {};
            g.Zy(a.ea)
        },
        j9 = function(a, b) {
            c9.call(this, a, b, "ManualSession");
            this.B = g.Xy((0, g.Wa)(this.Vy, this, null), 150)
        },
        k9 = function(a, b) {
            g.yE.call(this);
            this.config_ = b;
            this.u = a;
            this.V = b.appId || "233637DE";
            this.C = b.theme || "cl";
            this.ea = b.disableCastApi || !1;
            this.J = b.forceMirroring || !1;
            this.j = null;
            this.K = !1;
            this.B = [];
            this.D = (0, g.Wa)(this.L6, this)
        },
        xrb = function(a, b) {
            return b ? g.xb(a.B, function(c) {
                return V7(b, c.label)
            }, a) : null
        },
        l9 = function(a) {
            R8("Controller", a)
        },
        Gqb = function(a) {
            window.chrome && chrome.cast && chrome.cast.logMessage && chrome.cast.logMessage(a)
        },
        m9 = function(a) {
            return a.K || !!a.B.length || !!a.j
        },
        n9 = function(a, b, c) {
            b != a.j && (g.kb(a.j), (a.j = b) ? (c ? a.oa("yt-remote-cast2-receiver-resumed",
                b.u) : a.oa("yt-remote-cast2-receiver-selected", b.u), b.subscribe("sessionScreen", (0, g.Wa)(a.zW, a, b)), b.subscribe("sessionFailed", function() {
                return yrb(a, b)
            }), b.j ? a.oa("yt-remote-cast2-session-change", b.j) : c && a.j.Vy(null)) : a.oa("yt-remote-cast2-session-change", null))
        },
        yrb = function(a, b) {
            a.j == b && a.oa("yt-remote-cast2-session-failed")
        },
        zrb = function(a) {
            var b = a.u.ZQ(),
                c = a.j && a.j.u;
            a = g.qm(b, function(d) {
                c && V7(d, c.label) && (c = null);
                var e = d.uuid ? d.uuid : d.id,
                    f = xrb(this, d);
                f ? (f.label = e, f.friendlyName = d.name) : (f = new chrome.cast.Receiver(e, d.name), f.receiverType = chrome.cast.ReceiverType.CUSTOM);
                return f
            }, a);
            c && (c.receiverType != chrome.cast.ReceiverType.CUSTOM && (c = new chrome.cast.Receiver(c.label, c.friendlyName), c.receiverType = chrome.cast.ReceiverType.CUSTOM), a.push(c));
            return a
        },
        Grb = function(a, b, c, d) {
            d.disableCastApi ? o9("Cannot initialize because disabled by Mdx config.") : Arb() ? Brb(b, d) && (Crb(!0), window.chrome && chrome.cast && chrome.cast.isAvailable ? Drb(a, c) : (window.__onGCastApiAvailable = function(e, f) {
                e ? Drb(a, c) : (p9("Failed to load cast API: " + f), Erb(!1), Crb(!1), g.nA("yt-remote-cast-available"), g.nA("yt-remote-cast-receiver"),
                    Frb(), c(!1))
            }, d.loadCastApiSetupScript ? g.MC("https://www.gstatic.com/cv/js/sender/v1/cast_sender.js") : 0 <= window.navigator.userAgent.indexOf("Android") && 0 <= window.navigator.userAgent.indexOf("Chrome/") && window.navigator.presentation ? 60 <= Cob() && Lob() : !window.chrome || !window.navigator.presentation || 0 <= window.navigator.userAgent.indexOf("Edge") ? Gob() : 89 <= Cob() ? Nob() : (Kob(), d8(Mob.map(Hob))))) : o9("Cannot initialize because not running Chrome")
        },
        Frb = function() {
            o9("dispose");
            var a = q9();
            a && a.dispose();
            g.Ma("yt.mdx.remote.cloudview.instance_", null);
            Hrb(!1);
            g.KC(Irb);
            Irb.length = 0
        },
        r9 = function() {
            return !!g.mA("yt-remote-cast-installed")
        },
        Jrb = function() {
            var a = g.mA("yt-remote-cast-receiver");
            return a ? a.friendlyName : null
        },
        Krb = function() {
            o9("clearCurrentReceiver");
            g.nA("yt-remote-cast-receiver")
        },
        Lrb = function() {
            return r9() ? q9() ? q9().getCastSession() : (p9("getCastSelector: Cast is not initialized."), null) : (p9("getCastSelector: Cast API is not installed!"), null)
        },
        Mrb = function() {
            r9() ? q9() ? s9() ? (o9("Requesting cast selector."), q9().requestSession()) : (o9("Wait for cast API to be ready to request the session."), Irb.push(g.JC("yt-remote-cast2-api-ready", Mrb))) : p9("requestCastSelector: Cast is not initialized.") : p9("requestCastSelector: Cast API is not installed!")
        },
        t9 = function(a, b) {
            s9() ? q9().setConnectedScreenStatus(a, b) : p9("setConnectedScreenStatus called before ready.")
        },
        Arb = function() {
            var a = 0 <= g.kc().search(/ (CrMo|Chrome|CriOS)\//);
            return g.oI || a
        },
        Nrb = function(a, b) {
            q9().init(a, b)
        },
        Brb = function(a, b) {
            var c = !1;
            q9() || (a = new k9(a, b), a.subscribe("yt-remote-cast2-availability-change", function(d) {
                g.lA("yt-remote-cast-available", d);
                b8("yt-remote-cast2-availability-change", d)
            }), a.subscribe("yt-remote-cast2-receiver-selected", function(d) {
                o9("onReceiverSelected: " + d.friendlyName);
                g.lA("yt-remote-cast-receiver", d);
                b8("yt-remote-cast2-receiver-selected", d)
            }), a.subscribe("yt-remote-cast2-receiver-resumed", function(d) {
                o9("onReceiverResumed: " + d.friendlyName);
                g.lA("yt-remote-cast-receiver", d);
                b8("yt-remote-cast2-receiver-resumed", d)
            }), a.subscribe("yt-remote-cast2-session-change", function(d) {
                o9("onSessionChange: " + W7(d));
                d || g.nA("yt-remote-cast-receiver");
                b8("yt-remote-cast2-session-change", d)
            }), g.Ma("yt.mdx.remote.cloudview.instance_", a), c = !0);
            o9("cloudview.createSingleton_: " + c);
            return c
        },
        q9 = function() {
            return g.Na("yt.mdx.remote.cloudview.instance_")
        },
        Drb = function(a, b) {
            Erb(!0);
            Crb(!1);
            Nrb(a, function(c) {
                c ? (Hrb(!0), g.LC("yt-remote-cast2-api-ready")) : (p9("Failed to initialize cast API."), Erb(!1), g.nA("yt-remote-cast-available"), g.nA("yt-remote-cast-receiver"), Frb());
                b(c)
            })
        },
        o9 = function(a) {
            R8("cloudview", a)
        },
        p9 = function(a) {
            R8("cloudview", a)
        },
        Erb = function(a) {
            o9("setCastInstalled_ " + a);
            g.lA("yt-remote-cast-installed", a)
        },
        s9 = function() {
            return !!g.Na("yt.mdx.remote.cloudview.apiReady_")
        },
        Hrb = function(a) {
            o9("setApiReady_ " + a);
            g.Ma("yt.mdx.remote.cloudview.apiReady_", a)
        },
        Crb = function(a) {
            g.Ma("yt.mdx.remote.cloudview.initializing_", a)
        },
        u9 = function(a) {
            this.index = -1;
            this.videoId = this.listId = "";
            this.volume = this.playerState = -1;
            this.muted = !1;
            this.audioTrackId = null;
            this.J = this.K = 0;
            this.trackData = null;
            this.Ek = this.Qo = !1;
            this.V = this.D = this.j = this.C = 0;
            this.B = NaN;
            this.u = !1;
            this.reset(a)
        },
        Orb = function(a) {
            a.audioTrackId = null;
            a.trackData = null;
            a.playerState = -1;
            a.Qo = !1;
            a.Ek = !1;
            a.K = 0;
            a.J = g.Ya();
            a.C = 0;
            a.j = 0;
            a.D = 0;
            a.V = 0;
            a.B = NaN;
            a.u = !1
        },
        v9 = function(a) {
            return a.hd() ? (g.Ya() - a.J) / 1E3 : 0
        },
        w9 = function(a, b) {
            a.K = b;
            a.J = g.Ya()
        },
        x9 = function(a) {
            switch (a.playerState) {
                case 1:
                case 1081:
                    return (g.Ya() - a.J) / 1E3 + a.K;
                case -1E3:
                    return 0
            }
            return a.K
        },
        y9 = function(a, b, c) {
            var d = a.videoId;
            a.videoId = b;
            a.index = c;
            b != d && Orb(a)
        },
        Prb = function(a) {
            var b = {};
            b.index = a.index;
            b.listId = a.listId;
            b.videoId = a.videoId;
            b.playerState = a.playerState;
            b.volume = a.volume;
            b.muted = a.muted;
            b.audioTrackId = a.audioTrackId;
            b.trackData = g.id(a.trackData);
            b.hasPrevious = a.Qo;
            b.hasNext = a.Ek;
            b.playerTime = a.K;
            b.playerTimeAt = a.J;
            b.seekableStart = a.C;
            b.seekableEnd = a.j;
            b.duration = a.D;
            b.loadedTime = a.V;
            b.liveIngestionTime = a.B;
            return b
        },
        A9 = function(a, b) {
            g.yE.call(this);
            this.B = 0;
            this.C = a;
            this.J = [];
            this.D = new tqb;
            this.u = this.j = null;
            this.ea = (0, g.Wa)(this.z5, this);
            this.K = (0, g.Wa)(this.NC, this);
            this.V = (0, g.Wa)(this.y5, this);
            this.ma = (0, g.Wa)(this.E5, this);
            var c = 0;
            a ? (c = a.getProxyState(), 3 != c && (a.subscribe("proxyStateChange", this.aP, this), Qrb(this))) : c = 3;
            0 != c && (b ? this.aP(c) : g.Xy((0, g.Wa)(function() {
                this.aP(c)
            }, this), 0));
            (a = Lrb()) && z9(this, a);
            this.subscribe("yt-remote-cast2-session-change", this.ma)
        },
        B9 = function(a) {
            return new u9(a.C.getPlayerContextData())
        },
        Qrb = function(a) {
            g.Wb("nowAutoplaying autoplayDismissed remotePlayerChange remoteQueueChange autoplayModeChange autoplayUpNext previousNextChange multiStateLoopEnabled loopModeChange".split(" "), function(b) {
                this.J.push(this.C.subscribe(b, g.Xa(this.J6, b), this))
            }, a)
        },
        Rrb = function(a) {
            g.Wb(a.J, function(b) {
                this.C.unsubscribeByKey(b)
            }, a);
            a.J.length = 0
        },
        C9 = function(a) {
            return 1 == a.getState()
        },
        D9 = function(a, b) {
            var c = a.D;
            50 > c.j.length + c.u.length && a.D.u.push(b)
        },
        Srb = function(a, b, c) {
            var d = B9(a);
            w9(d, c); - 1E3 != d.playerState && (d.playerState = b);
            E9(a, d)
        },
        F9 = function(a, b, c) {
            a.C.sendMessage(b, c)
        },
        E9 = function(a, b) {
            Rrb(a);
            a.C.setPlayerContextData(Prb(b));
            Qrb(a)
        },
        z9 = function(a, b) {
            a.u && (a.u.removeUpdateListener(a.ea), a.u.removeMediaListener(a.K), a.NC(null));
            a.u = b;
            a.u && (S8("Setting cast session: " + a.u.sessionId), a.u.addUpdateListener(a.ea), a.u.addMediaListener(a.K), a.u.media.length && a.NC(a.u.media[0]))
        },
        Trb = function(a) {
            var b = a.j.media,
                c = a.j.customData;
            if (b && c) {
                var d = B9(a);
                b.contentId != d.videoId && S8("Cast changing video to: " + b.contentId);
                d.videoId = b.contentId;
                d.playerState = c.playerState;
                w9(d, a.j.getEstimatedTime());
                E9(a, d)
            } else S8("No cast media video. Ignoring state update.")
        },
        G9 = function(a, b, c) {
            return (0, g.Wa)(function(d) {
                this.Wf("Failed to " + b + " with cast v2 channel. Error code: " + d.code);
                d.code != chrome.cast.ErrorCode.TIMEOUT && (this.Wf("Retrying " + b + " using MDx browser channel."), F9(this, b, c))
            }, a)
        },
        J9 = function(a, b, c, d) {
            d = void 0 === d ? !1 : d;
            g.yE.call(this);
            var e = this;
            this.J = NaN;
            this.Da = !1;
            this.ea = this.V = this.qa = this.Aa = NaN;
            this.ma = [];
            this.D = this.K = this.C = this.j = this.u = null;
            this.Ma = a;
            this.Ja = d;
            this.ma.push(g.$z(window, "beforeunload", function() {
                e.ly(2)
            }));
            this.B = [];
            this.j = new u9;
            this.Oa = b.id;
            this.Ba = b.idType;
            this.u = Fqb(this.Ma, c, this.eR, "shortLived" == this.Ba, this.Oa);
            this.u.Sa("channelOpened", function() {
                Urb(e)
            });
            this.u.Sa("channelClosed", function() {
                H9("Channel closed");
                isNaN(e.J) ? $7(!0) : $7();
                e.dispose()
            });
            this.u.Sa("channelError", function(f) {
                $7();
                isNaN(e.OB()) ? (1 == f && "shortLived" == e.Ba && e.oa("browserChannelAuthError", f), H9("Channel error: " + f + " without reconnection"), e.dispose()) : (e.Da = !0, H9("Channel error: " + f + " with reconnection in " + e.OB() + " ms"), I9(e, 2))
            });
            this.u.Sa("channelMessage", function(f) {
                Vrb(e, f)
            });
            this.u.Xq(b.token);
            this.subscribe("remoteQueueChange", function() {
                var f = e.j.videoId;
                g.oA() && g.lA("yt-remote-session-video-id", f)
            })
        },
        Wrb = function(a) {
            return g.xb(a.B, function(b) {
                return "LOUNGE_SCREEN" == b.type
            })
        },
        H9 = function(a) {
            R8("conn", a)
        },
        I9 = function(a, b) {
            a.oa("proxyStateChange", b)
        },
        Xrb = function(a) {
            a.J = g.Xy(function() {
                H9("Connecting timeout");
                a.ly(1)
            }, 2E4)
        },
        Yrb = function(a) {
            g.Zy(a.J);
            a.J = NaN
        },
        Zrb = function(a) {
            g.Zy(a.Aa);
            a.Aa = NaN
        },
        asb = function(a) {
            $rb(a);
            a.qa = g.Xy(function() {
                K9(a, "getNowPlaying")
            }, 2E4)
        },
        $rb = function(a) {
            g.Zy(a.qa);
            a.qa = NaN
        },
        Urb = function(a) {
            H9("Channel opened");
            a.Da && (a.Da = !1, Zrb(a), a.Aa = g.Xy(function() {
                H9("Timing out waiting for a screen.");
                a.ly(1)
            }, 15E3))
        },
        csb = function(a, b) {
            var c = null;
            if (b) {
                var d = Wrb(a);
                d && (c = {
                    clientName: d.clientName,
                    deviceMake: d.brand,
                    deviceModel: d.model,
                    osVersion: d.osVersion
                })
            }
            g.Ma("yt.mdx.remote.remoteClient_", c);
            b && (Yrb(a), Zrb(a));
            c = a.u.My() && isNaN(a.J);
            b == c ? b && (I9(a, 1), K9(a, "getSubtitlesTrack")) : b ? (a.bU() && a.j.reset(), I9(a, 1), K9(a, "getNowPlaying"), bsb(a)) : a.ly(1)
        },
        dsb = function(a, b) {
            var c = b.params.videoId;
            delete b.params.videoId;
            c == a.j.videoId && (g.cd(b.params) ? a.j.trackData = null : a.j.trackData = b.params, a.oa("remotePlayerChange"))
        },
        esb = function(a, b, c) {
            var d = b.params.videoId || b.params.video_id,
                e = parseInt(b.params.currentIndex, 10);
            a.j.listId = b.params.listId || a.j.listId;
            y9(a.j, d, e);
            a.oa("remoteQueueChange", c)
        },
        gsb = function(a, b) {
            b.params = b.params || {};
            esb(a, b, "NOW_PLAYING_MAY_CHANGE");
            fsb(a, b);
            a.oa("autoplayDismissed")
        },
        fsb = function(a, b) {
            var c = parseInt(b.params.currentTime || b.params.current_time, 10);
            w9(a.j, isNaN(c) ? 0 : c);
            c = parseInt(b.params.state, 10);
            c = isNaN(c) ? -1 : c; - 1 == c && -1E3 == a.j.playerState && (c = -1E3);
            a.j.playerState = c;
            c = Number(b.params.loadedTime);
            a.j.V = isNaN(c) ? 0 : c;
            a.j.Xk(Number(b.params.duration));
            c = a.j;
            var d = Number(b.params.liveIngestionTime);
            c.B = d;
            c.u = isNaN(d) ? !1 : !0;
            c = a.j;
            d = Number(b.params.seekableStartTime);
            b = Number(b.params.seekableEndTime);
            c.C = isNaN(d) ? 0 : d;
            c.j = isNaN(b) ? 0 : b;
            1 == a.j.playerState ? asb(a) : $rb(a);
            a.oa("remotePlayerChange")
        },
        hsb = function(a, b) {
            if (-1E3 != a.j.playerState) {
                var c =
                    1085;
                switch (parseInt(b.params.adState, 10)) {
                    case 1:
                        c = 1081;
                        break;
                    case 2:
                        c = 1084;
                        break;
                    case 0:
                        c = 1083
                }
                a.j.playerState = c;
                b = parseInt(b.params.currentTime, 10);
                w9(a.j, isNaN(b) ? 0 : b);
                a.oa("remotePlayerChange")
            }
        },
        isb = function(a, b) {
            var c = "true" == b.params.muted;
            a.j.volume = parseInt(b.params.volume, 10);
            a.j.muted = c;
            a.oa("remotePlayerChange")
        },
        jsb = function(a, b) {
            a.K = b.params.videoId;
            a.oa("nowAutoplaying", parseInt(b.params.timeout, 10))
        },
        ksb = function(a, b) {
            a.K = b.params.videoId || null;
            a.oa("autoplayUpNext", a.K)
        },
        lsb = function(a, b) {
            a.D = b.params.autoplayMode;
            a.oa("autoplayModeChange", a.D);
            "DISABLED" == a.D && a.oa("autoplayDismissed")
        },
        msb = function(a, b) {
            var c = "true" == b.params.hasNext;
            a.j.Qo = "true" == b.params.hasPrevious;
            a.j.Ek = c;
            a.oa("previousNextChange")
        },
        Vrb = function(a, b) {
            b = b.message;
            b.params ? H9("Received: action=" + b.action + ", params=" + g.Wi(b.params)) : H9("Received: action=" + b.action + " {}");
            switch (b.action) {
                case "loungeStatus":
                    b = R7(b.params.devices);
                    a.B = g.qm(b, function(d) {
                        return new T7(d)
                    });
                    b = !!g.xb(a.B, function(d) {
                        return "LOUNGE_SCREEN" == d.type
                    });
                    csb(a, b);
                    b = a.SU("mlm");
                    a.oa("multiStateLoopEnabled", b);
                    break;
                case "loungeScreenDisconnected":
                    g.Eb(a.B, function(d) {
                        return "LOUNGE_SCREEN" == d.type
                    });
                    csb(a, !1);
                    break;
                case "remoteConnected":
                    var c = new T7(R7(b.params.device));
                    g.xb(a.B, function(d) {
                        return d.equals(c)
                    }) || Qnb(a.B, c);
                    break;
                case "remoteDisconnected":
                    c = new T7(R7(b.params.device));
                    g.Eb(a.B, function(d) {
                        return d.equals(c)
                    });
                    break;
                case "gracefulDisconnect":
                    break;
                case "playlistModified":
                    esb(a, b, "QUEUE_MODIFIED");
                    break;
                case "nowPlaying":
                    gsb(a, b);
                    break;
                case "onStateChange":
                    fsb(a, b);
                    break;
                case "onAdStateChange":
                    hsb(a, b);
                    break;
                case "onVolumeChanged":
                    isb(a, b);
                    break;
                case "onSubtitlesTrackChanged":
                    dsb(a, b);
                    break;
                case "nowAutoplaying":
                    jsb(a, b);
                    break;
                case "autoplayDismissed":
                    a.oa("autoplayDismissed");
                    break;
                case "autoplayUpNext":
                    ksb(a, b);
                    break;
                case "onAutoplayModeChanged":
                    lsb(a, b);
                    break;
                case "onHasPreviousNextChanged":
                    msb(a, b);
                    break;
                case "requestAssistedSignIn":
                    a.oa("assistedSignInRequested", b.params.authCode);
                    break;
                case "onLoopModeChanged":
                    a.oa("loopModeChange", b.params.loopMode);
                    break;
                default:
                    H9("Unrecognized action: " + b.action)
            }
        },
        bsb = function(a) {
            g.Zy(a.ea);
            a.ea = g.Xy(function() {
                a.ly(1)
            }, 864E5)
        },
        K9 = function(a, b, c) {
            c ? H9("Sending: action=" + b + ", params=" + g.Wi(c)) : H9("Sending: action=" + b);
            a.u.sendMessage(b, c)
        },
        nsb = function(a) {
            W8.call(this, "ScreenServiceProxy");
            this.Xg = a;
            this.j = [];
            this.j.push(this.Xg.$_s("screenChange", (0, g.Wa)(this.D_, this)));
            this.j.push(this.Xg.$_s("onlineScreenChange", (0, g.Wa)(this.r6, this)))
        },
        ssb = function(a, b) {
            zob();
            if (!a8 || !a8.get("yt-remote-disable-remote-module-for-dev")) {
                b = g.zy("MDX_CONFIG") || b;
                qob();
                uob();
                L9 || (L9 = new O8(b ? b.loungeApiHost : void 0), Aob() && (L9.j = "/api/loungedev"));
                M9 || (M9 = g.Na("yt.mdx.remote.deferredProxies_") || [], g.Ma("yt.mdx.remote.deferredProxies_", M9));
                osb();
                var c = N9();
                if (!c) {
                    var d = new a9(L9, b ? b.disableAutomaticScreenCache || !1 : !1);
                    g.Ma("yt.mdx.remote.screenService_", d);
                    c = N9();
                    var e = {};
                    b && (e = {
                        appId: b.appId,
                        disableDial: b.disableDial,
                        theme: b.theme,
                        loadCastApiSetupScript: b.loadCastApiSetupScript,
                        disableCastApi: b.disableCastApi,
                        enableDialLoungeToken: b.enableDialLoungeToken,
                        enableCastLoungeToken: b.enableCastLoungeToken,
                        forceMirroring: b.forceMirroring
                    });
                    g.Ma("yt.mdx.remote.enableConnectWithInitialState_", b ? b.enableConnectWithInitialState || !1 : !1);
                    Grb(a, d, function(f) {
                        f ? O9() && t9(O9(), "YouTube TV") : d.subscribe("onlineScreenChange", function() {
                            b8("yt-remote-receiver-availability-change")
                        })
                    }, e)
                }
                b && !g.Na("yt.mdx.remote.initialized_") && (g.Ma("yt.mdx.remote.initialized_", !0), P9("Initializing: " + g.Wi(b)),
                    Q9.push(g.JC("yt-remote-cast2-api-ready", function() {
                        b8("yt-remote-api-ready")
                    })), Q9.push(g.JC("yt-remote-cast2-availability-change", function() {
                        b8("yt-remote-receiver-availability-change")
                    })), Q9.push(g.JC("yt-remote-cast2-receiver-selected", function() {
                        R9(null);
                        b8("yt-remote-auto-connect", "cast-selector-receiver")
                    })), Q9.push(g.JC("yt-remote-cast2-receiver-resumed", function() {
                        b8("yt-remote-receiver-resumed", "cast-selector-receiver")
                    })), Q9.push(g.JC("yt-remote-cast2-session-change", psb)), Q9.push(g.JC("yt-remote-connection-change", function(f) {
                        f ? t9(O9(), "YouTube TV") : S9() || (t9(null, null), Krb())
                    })), Q9.push(g.JC("yt-remote-cast2-session-failed", function() {
                        b8("yt-remote-connection-failed")
                    })), a = qsb(), b.isAuto && (a.id += "#dial"), e = b.capabilities || [], g.Cy("desktop_enable_autoplay") &&
                    e.push("atp"), 0 < e.length && (a.capabilities = e), a.name = b.device, a.app = b.app, (b = b.theme) && (a.theme = b), P9(" -- with channel params: " + g.Wi(a)), a ? (g.lA("yt-remote-session-app", a.app), g.lA("yt-remote-session-name", a.name)) : (g.nA("yt-remote-session-app"), g.nA("yt-remote-session-name")), g.Ma("yt.mdx.remote.channelParams_", a), c.start(), O9() || rsb())
            }
        },
        tsb = function() {
            var a = N9().Xg.$_gos();
            var b = T9();
            b && U9() && (pob(a, b) || a.push(b));
            return oob(a)
        },
        vsb = function() {
            var a = usb();
            !a && r9() && Jrb() && (a = {
                key: "cast-selector-receiver",
                name: Jrb()
            });
            return a
        },
        usb = function() {
            var a = tsb(),
                b = T9();
            b || (b = S9());
            return g.xb(a, function(c) {
                return b && V7(b, c.key) ? !0 : !1
            })
        },
        T9 = function() {
            var a = O9();
            if (!a) return null;
            var b = N9().Ak();
            return X7(b, a)
        },
        psb = function(a) {
            P9("remote.onCastSessionChange_: " + W7(a));
            if (a) {
                var b = T9();
                if (b && b.id == a.id) {
                    if (t9(b.id, "YouTube TV"), "shortLived" == a.idType && (a = a.token)) V9 && (V9.token = a), (b = U9()) && b.Xq(a)
                } else b && W9(), X9(a, 1)
            } else U9() && W9()
        },
        W9 = function() {
            s9() ? q9().stopSession() : p9("stopSession called before API ready.");
            var a = U9();
            a && (a.disconnect(1), wsb(null))
        },
        xsb = function() {
            var a = U9();
            return !!a && 3 != a.getProxyState()
        },
        P9 = function(a) {
            R8("remote", a)
        },
        N9 = function() {
            if (!ysb) {
                var a = g.Na("yt.mdx.remote.screenService_");
                ysb = a ? new nsb(a) : null
            }
            return ysb
        },
        O9 = function() {
            return g.Na("yt.mdx.remote.currentScreenId_")
        },
        zsb = function(a) {
            g.Ma("yt.mdx.remote.currentScreenId_", a)
        },
        Asb = function() {
            return g.Na("yt.mdx.remote.connectData_")
        },
        R9 = function(a) {
            g.Ma("yt.mdx.remote.connectData_", a)
        },
        U9 = function() {
            return g.Na("yt.mdx.remote.connection_")
        },
        wsb = function(a) {
            var b = U9();
            R9(null);
            a || zsb("");
            g.Ma("yt.mdx.remote.connection_", a);
            M9 && (g.Wb(M9, function(c) {
                c(a)
            }), M9.length = 0);
            b && !a ? b8("yt-remote-connection-change", !1) : !b && a && b8("yt-remote-connection-change", !0)
        },
        S9 = function() {
            var a = g.oA();
            if (!a) return null;
            var b = N9();
            if (!b) return null;
            b = b.Ak();
            return X7(b, a)
        },
        X9 = function(a, b) {
            O9();
            T9() && T9();
            if (Y9) V9 = a;
            else {
                zsb(a.id);
                var c = g.Na("yt.mdx.remote.enableConnectWithInitialState_") || !1;
                a = new J9(L9, a, qsb(), c);
                a.connect(b, Asb());
                a.subscribe("beforeDisconnect", function(d) {
                    b8("yt-remote-before-disconnect", d)
                });
                a.subscribe("beforeDispose", function() {
                    U9() && (U9(), wsb(null))
                });
                a.subscribe("browserChannelAuthError", function() {
                    var d = T9();
                    d && "shortLived" == d.idType && (s9() ? q9().handleBrowserChannelAuthError() : p9("refreshLoungeToken called before API ready."))
                });
                wsb(a)
            }
        },
        rsb = function() {
            var a = S9();
            a ? (P9("Resume connection to: " + W7(a)), X9(a, 0)) : ($7(), Krb(), P9("Skipping connecting because no session screen found."))
        },
        osb = function() {
            var a = qsb();
            if (g.cd(a)) {
                a = Z7();
                var b = g.mA("yt-remote-session-name") || "",
                    c = g.mA("yt-remote-session-app") || "";
                a = {
                    device: "REMOTE_CONTROL",
                    id: a,
                    name: b,
                    app: c,
                    mdxVersion: 3
                };
                a.authuser = String(g.zy("SESSION_INDEX", "0"));
                (b = g.zy("DELEGATED_SESSION_ID")) && (a.pageId = String(b));
                g.Ma("yt.mdx.remote.channelParams_", a)
            }
        },
        qsb = function() {
            return g.Na("yt.mdx.remote.channelParams_") || {}
        },
        Dsb = function(a, b, c) {
            g.D.call(this);
            var d = this;
            this.module = a;
            this.G = b;
            this.Bc = c;
            this.events = new g.lI(this);
            this.ea = this.events.T(this.G, "onVolumeChange", function(e) {
                Bsb(d, e)
            });
            this.C = !1;
            this.D = new g.rP(64);
            this.j = new g.Qp(this.RX, 500, this);
            this.u = new g.Qp(this.SX, 1E3, this);
            this.K = new e8(this.B9, 0, this);
            this.B = {};
            this.V = new g.Qp(this.GY, 1E3, this);
            this.J = new f8(this.seekTo, 1E3, this);
            g.J(this, this.events);
            this.events.T(b, "onCaptionsTrackListChanged", this.c6);
            this.events.T(b, "captionschanged", this.w5);
            this.events.T(b, "captionssettingschanged", this.bY);
            this.events.T(b, "videoplayerreset", this.cH);
            this.events.T(b, "mdxautoplaycancel", function() {
                d.Bc.lT()
            });
            b.N("enable_mdx_video_play_directly") && this.events.T(b, "videodatachange", function() {
                Csb(d.module) || Z9(d) || $9(d, 0)
            });
            a = this.Bc;
            a.isDisposed();
            a.subscribe("proxyStateChange", this.wW, this);
            a.subscribe("remotePlayerChange", this.UC, this);
            a.subscribe("remoteQueueChange", this.cH, this);
            a.subscribe("previousNextChange", this.tW, this);
            a.subscribe("nowAutoplaying", this.oW, this);
            a.subscribe("autoplayDismissed", this.TV, this);
            g.J(this, this.j);
            g.J(this, this.u);
            g.J(this, this.K);
            g.J(this, this.V);
            g.J(this, this.J);
            this.bY();
            this.cH();
            this.UC()
        },
        Bsb = function(a, b) {
            if (Z9(a)) {
                a.Bc.unsubscribe("remotePlayerChange", a.UC, a);
                var c = Math.round(b.volume);
                b = !!b.muted;
                var d = B9(a.Bc);
                if (c !== d.volume || b !== d.muted) a.Bc.setVolume(c, b), a.V.start();
                a.Bc.subscribe("remotePlayerChange", a.UC, a)
            }
        },
        Esb = function(a) {
            a.zc(0);
            a.j.stop();
            a.wc(new g.rP(64))
        },
        Fsb = function(a, b) {
            if (Z9(a) && !a.C) {
                var c = null;
                b && (c = {
                    style: a.G.getSubtitlesUserSettings()
                }, g.kd(c, b));
                a.Bc.dR(a.G.getVideoData(1).videoId, c);
                a.B = B9(a.Bc).trackData
            }
        },
        $9 = function(a, b) {
            var c = a.G.getPlaylist();
            if (null == c ? 0 : c.listId) {
                var d = c.index;
                var e = c.listId.toString()
            }
            c = a.G.getVideoData(1);
            a.Bc.playVideo(c.videoId, b, d, e, c.playerParams, c.Aa, Pnb(c));
            a.wc(new g.rP(1))
        },
        Gsb = function(a, b) {
            if (b) {
                var c = a.G.getOption("captions", "tracklist", {
                    IU: 1
                });
                c && c.length ? (a.G.setOption("captions", "track", b), a.C = !1) : (a.G.loadModule("captions"), a.C = !0)
            } else a.G.setOption("captions", "track", {})
        },
        Z9 = function(a) {
            return B9(a.Bc).videoId === a.G.getVideoData(1).videoId
        },
        a$ = function() {
            g.V.call(this, {
                I: "div",
                S: "ytp-mdx-popup-dialog",
                Y: {
                    role: "dialog"
                },
                X: [{
                    I: "div",
                    S: "ytp-mdx-popup-dialog-inner-content",
                    X: [{
                            I: "div",
                            S: "ytp-mdx-popup-title",
                            xa: "\u041e\u0434\u0458\u0430\u0432\u0459\u0435\u043d\u0438 \u0441\u0442\u0435"
                        }, {
                            I: "div",
                            S: "ytp-mdx-popup-description",
                            xa: "\u0412\u0438\u0434\u0435\u043e \u0441\u043d\u0438\u043c\u0446\u0438 \u043a\u043e\u0458\u0435 \u0433\u043b\u0435\u0434\u0430\u0442\u0435 \u043c\u043e\u0433\u0443 \u0434\u0430 \u0441\u0435 \u0434\u043e\u0434\u0430\u0458\u0443 \u0443 \u0438\u0441\u0442\u043e\u0440\u0438\u0458\u0443 \u0433\u043b\u0435\u0434\u0430\u045a\u0430 \u043d\u0430 \u0422\u0412-\u0443 \u0438 \u0434\u0430 \u0443\u0442\u0438\u0447\u0443 \u043d\u0430 \u043f\u0440\u0435\u043f\u043e\u0440\u0443\u043a\u0435 \u043d\u0430 \u0422\u0412-\u0443. \u0414\u0430 \u0431\u0438\u0441\u0442\u0435 \u0442\u043e \u0441\u043f\u0440\u0435\u0447\u0438\u043b\u0438, \u043e\u0442\u043a\u0430\u0436\u0438\u0442\u0435 \u0438 \u043f\u0440\u0438\u0458\u0430\u0432\u0438\u0442\u0435 \u0441\u0435 \u043d\u0430 YouTube \u0441\u0430 \u0441\u0432\u043e\u0433 \u0440\u0430\u0447\u0443\u043d\u0430\u0440\u0430."
                        },
                        {
                            I: "div",
                            S: "ytp-mdx-privacy-popup-buttons",
                            X: [{
                                I: "button",
                                Ka: ["ytp-button", "ytp-mdx-privacy-popup-cancel"],
                                xa: "\u041e\u0442\u043a\u0430\u0436\u0438"
                            }, {
                                I: "button",
                                Ka: ["ytp-button", "ytp-mdx-privacy-popup-confirm"],
                                xa: "\u041f\u043e\u0442\u0432\u0440\u0434\u0438"
                            }]
                        }
                    ]
                }]
            });
            this.j = new g.VQ(this, 250);
            this.cancelButton = this.Fa("ytp-mdx-privacy-popup-cancel");
            this.confirmButton = this.Fa("ytp-mdx-privacy-popup-confirm");
            g.J(this, this.j);
            this.T(this.cancelButton, "click", this.u);
            this.T(this.confirmButton, "click",
                this.B)
        },
        b$ = function(a) {
            g.V.call(this, {
                I: "div",
                S: "ytp-remote",
                X: [{
                    I: "div",
                    S: "ytp-remote-display-status",
                    X: [{
                        I: "div",
                        S: "ytp-remote-display-status-icon",
                        X: [g.aDa()]
                    }, {
                        I: "div",
                        S: "ytp-remote-display-status-text",
                        xa: "{{statustext}}"
                    }]
                }]
            });
            this.api = a;
            this.j = new g.VQ(this, 250);
            g.J(this, this.j);
            this.T(a, "presentingplayerstatechange", this.onStateChange);
            this.xc(a.Ib())
        },
        c$ = function(a, b) {
            g.yV.call(this, "\u041f\u0443\u0441\u0442\u0438 \u043d\u0430", 1, a, b);
            this.G = a;
            this.Ct = {};
            this.T(a, "onMdxReceiversChange", this.C);
            this.T(a, "presentingplayerstatechange", this.C);
            this.C()
        },
        Hsb = function(a) {
            g.uT.call(this, a);
            this.fp = {
                key: nob(),
                name: "\u041e\u0432\u0430\u0458 \u0440\u0430\u0447\u0443\u043d\u0430\u0440"
            };
            this.Dl = null;
            this.subscriptions = [];
            this.lO = this.Bc = null;
            this.Ct = [this.fp];
            this.Wr = this.fp;
            this.bf = new g.rP(64);
            this.dV = 0;
            this.Eh = -1;
            this.jD = !1;
            this.hD = this.zz = null;
            if (!g.VK(this.player.W()) && !g.WK(this.player.W())) {
                a = this.player;
                var b = g.cS(a);
                b && (b = b.Qm()) && (b = new c$(a, b), g.J(this, b));
                b = new b$(a);
                g.J(this, b);
                g.sS(a, b.element, 4);
                this.zz = new a$;
                g.J(this, this.zz);
                g.sS(a, this.zz.element, 4);
                this.jD = !!S9()
            }
        },
        d$ = function(a) {
            a.hD && (a.player.removeEventListener("presentingplayerstatechange", a.hD), a.hD = null)
        },
        Isb = function(a, b, c) {
            a.bf = c;
            a.player.oa("presentingplayerstatechange", new g.HO(c, b))
        },
        e$ = function(a, b) {
            if (b.key !== a.Wr.key)
                if (b.key === a.fp.key) W9();
                else if (Csb(a) && Jsb(a), a.Wr = b, !a.player.W().N("disable_mdx_connection_in_mdx_module_for_music_web") || !g.WK(a.player.W())) {
                var c = a.player.getPlaylistId();
                var d = a.player.getVideoData(1);
                var e = d.videoId;
                if (!c && !e || (2 === a.player.getAppState() || 1 === a.player.getAppState()) && a.player.W().N("should_clear_video_data_on_player_cued_unstarted")) d = null;
                else {
                    var f = a.player.getPlaylist();
                    if (f) {
                        var h = [];
                        for (var l = 0; l < f.length; l++) h[l] = g.rT(f, l).videoId
                    } else h = [e];
                    f = a.player.getCurrentTime(1);
                    a = {
                        videoIds: h,
                        listId: c,
                        videoId: e,
                        playerParams: d.playerParams,
                        clickTrackingParams: d.Aa,
                        index: Math.max(a.player.getPlaylistIndex(), 0),
                        currentTime: 0 === f ? void 0 : f
                    };
                    (d = Pnb(d)) && (a.locationInfo = d);
                    d = a
                }
                P9("Connecting to: " + g.Wi(b));
                "cast-selector-receiver" == b.key ? (R9(d || null), b = d || null, s9() ? q9().setLaunchParams(b) : p9("setLaunchParams called before ready.")) : !d && xsb() && O9() == b.key ? b8("yt-remote-connection-change", !0) : (W9(), R9(d || null), d = N9().Ak(), (b = X7(d, b.key)) && X9(b, 1))
            }
        },
        Csb = function(a) {
            var b;
            (b = !a.player.W().N("mdx_enable_privacy_disclosure_ui")) || (b = ((b = g.zy("PLAYER_CONFIG")) && b.args && void 0 !== b.args.authuser ? !0 : !(!g.zy("SESSION_INDEX") && !g.zy("LOGGED_IN"))) || a.jD || !a.zz);
            return b ? !1 : g.lL(a.player.W()) || g.oL(a.player.W())
        },
        Jsb = function(a) {
            a.player.Ib().hd() ? a.player.pauseVideo() : (a.hD = function(b) {
                !a.jD && g.JO(b, 8) && (a.player.pauseVideo(), d$(a))
            }, a.player.addEventListener("presentingplayerstatechange", a.hD));
            a.zz && a.zz.pd();
            U9() || (Y9 = !0)
        };
    g.ft.prototype.ys = g.ca(0, function() {
        return g.Zh(this, 6)
    });
    var Spb = {
            "\x00": "\\0",
            "\b": "\\b",
            "\f": "\\f",
            "\n": "\\n",
            "\r": "\\r",
            "\t": "\\t",
            "\v": "\\x0B",
            '"': '\\"',
            "\\": "\\\\",
            "<": "\\u003C"
        },
        G8 = {
            "'": "\\'"
        },
        hob = {
            Dia: "atp",
            RUa: "ska",
            gSa: "que",
            tKa: "mus",
            QUa: "sus",
            Qwa: "dsp",
            mTa: "seq",
            qJa: "mic",
            Xoa: "dpa",
            Eja: "cds",
            jKa: "mlm",
            Loa: "dsdtr",
            SKa: "ntb",
            g4a: "vsp",
            Opa: "scn",
            uSa: "rpe"
        },
        iob = {
            l1: "u",
            CLASSIC: "cl",
            K0: "k",
            DZ: "i",
            oZ: "cr",
            Q0: "m",
            AZ: "g",
            gS: "up"
        };
    T7.prototype.equals = function(a) {
        return a ? this.id == a.id : !1
    };
    var a8, tob = "";
    Bob.prototype.flush = function(a, b) {
        a = void 0 === a ? [] : a;
        b = void 0 === b ? !1 : b;
        if (g.Cy("enable_client_streamz_web")) {
            a = g.v(a);
            for (var c = a.next(); !c.done; c = a.next()) c = g.Tea(c.value), c = {
                serializedIncrementBatch: g.Rf(c.j())
            }, g.OA("streamzIncremented", c, {
                sendIsolatedPayload: b
            })
        }
    };
    var c8, Job = Dob("loadCastFramework") || Dob("loadCastApplicationFramework"),
        Mob = ["pkedcjkdefgpdelpbcmbmeomcjbeemfm", "enhhojjnijigcajfphajepfemndkmdlo"];
    g.ab(e8, g.D);
    g.k = e8.prototype;
    g.k.c_ = function(a) {
        this.C = arguments;
        this.j = !1;
        this.Hc ? this.B = g.Ya() + this.Ii : this.Hc = g.Lf(this.D, this.Ii)
    };
    g.k.stop = function() {
        this.Hc && (g.La.clearTimeout(this.Hc), this.Hc = null);
        this.B = null;
        this.j = !1;
        this.C = []
    };
    g.k.pause = function() {
        ++this.u
    };
    g.k.resume = function() {
        this.u && (--this.u, !this.u && this.j && (this.j = !1, this.J.apply(null, this.C)))
    };
    g.k.ra = function() {
        this.stop();
        e8.Hf.ra.call(this)
    };
    g.k.d_ = function() {
        this.Hc && (g.La.clearTimeout(this.Hc), this.Hc = null);
        this.B ? (this.Hc = g.Lf(this.D, this.B - g.Ya()), this.B = null) : this.u ? this.j = !0 : (this.j = !1, this.J.apply(null, this.C))
    };
    g.x(f8, g.D);
    g.k = f8.prototype;
    g.k.bJ = function(a) {
        this.B = arguments;
        this.Hc || this.u ? this.j = !0 : Oob(this)
    };
    g.k.stop = function() {
        this.Hc && (g.La.clearTimeout(this.Hc), this.Hc = null, this.j = !1, this.B = null)
    };
    g.k.pause = function() {
        this.u++
    };
    g.k.resume = function() {
        this.u--;
        this.u || !this.j || this.Hc || (this.j = !1, Oob(this))
    };
    g.k.ra = function() {
        g.D.prototype.ra.call(this);
        this.stop()
    };
    g8.prototype.stringify = function(a) {
        return g.La.JSON.stringify(a, void 0)
    };
    g8.prototype.parse = function(a) {
        return g.La.JSON.parse(a, void 0)
    };
    g.ab(Pob, g.tb);
    g.ab(Qob, g.tb);
    var Rob = null;
    g.ab(Tob, g.tb);
    g.ab(Uob, g.tb);
    g.ab(Vob, g.tb);
    Wob.prototype.info = function() {};
    Wob.prototype.warning = function() {};
    var cpb = {},
        m8 = {};
    g.k = k8.prototype;
    g.k.setTimeout = function(a) {
        this.Hb = a
    };
    g.k.g_ = function(a) {
        a = a.target;
        var b = this.Za;
        b && 3 == g.Aj(a) ? b.bJ() : this.HQ(a)
    };
    g.k.HQ = function(a) {
        try {
            if (a == this.j) a: {
                var b = g.Aj(this.j),
                    c = this.j.u,
                    d = this.j.getStatus();
                if (!(3 > b) && (3 != b || g.pL || this.j && (this.u.u || g.Cj(this.j) || g.Dj(this.j)))) {
                    this.Ja || 4 != b || 7 == c || (8 == c || 0 >= d ? h8(3) : h8(2));
                    p8(this);
                    var e = this.j.getStatus();
                    this.Pb = e;
                    b: if (apb(this)) {
                        var f = g.Dj(this.j);
                        a = "";
                        var h = f.length,
                            l = 4 == g.Aj(this.j);
                        if (!this.u.B) {
                            if ("undefined" === typeof TextDecoder) {
                                n8(this);
                                o8(this);
                                var m = "";
                                break b
                            }
                            this.u.B = new g.La.TextDecoder
                        }
                        for (c = 0; c < h; c++) this.u.u = !0, a += this.u.B.decode(f[c], {
                            stream: l &&
                                c == h - 1
                        });
                        f.splice(0, h);
                        this.u.j += a;
                        this.ma = 0;
                        m = this.u.j
                    } else m = g.Cj(this.j);
                    if (this.B = 200 == e) {
                        if (this.qc && !this.Ua) {
                            b: {
                                if (this.j) {
                                    var n = g.Ej(this.j, "X-HTTP-Initial-Response");
                                    if (n && !g.cc(n)) {
                                        var p = n;
                                        break b
                                    }
                                }
                                p = null
                            }
                            if (e = p) this.Ua = !0,
                            dpb(this, e);
                            else {
                                this.B = !1;
                                this.J = 3;
                                i8(12);
                                n8(this);
                                o8(this);
                                break a
                            }
                        }
                        this.Ba ? (epb(this, b, m), g.pL && this.B && 3 == b && (this.ib.Sa(this.qb, "tick", this.f_), this.qb.start())) : dpb(this, m);
                        4 == b && n8(this);
                        this.B && !this.Ja && (4 == b ? gpb(this.D, this) : (this.B = !1, l8(this)))
                    } else g.yfa(this.j),
                        400 == e && 0 < m.indexOf("Unknown SID") ? (this.J = 3, i8(12)) : (this.J = 0, i8(13)), n8(this), o8(this)
                }
            }
        } catch (q) {} finally {}
    };
    g.k.f_ = function() {
        if (this.j) {
            var a = g.Aj(this.j),
                b = g.Cj(this.j);
            this.ma < b.length && (p8(this), epb(this, a, b), this.B && 4 != a && l8(this))
        }
    };
    g.k.cancel = function() {
        this.Ja = !0;
        n8(this)
    };
    g.k.e_ = function() {
        this.ea = null;
        var a = Date.now();
        0 <= a - this.Ab ? (2 != this.Oa && (h8(3), i8(17)), n8(this), this.J = 2, o8(this)) : fpb(this, this.Ab - a)
    };
    g.k.getLastError = function() {
        return this.J
    };
    g.k.UL = function() {
        return this.j
    };
    ppb.prototype.cancel = function() {
        this.B = rpb(this);
        if (this.u) this.u.cancel(), this.u = null;
        else if (this.j && 0 !== this.j.size) {
            for (var a = g.v(this.j.values()), b = a.next(); !b.done; b = a.next()) b.value.cancel();
            this.j.clear()
        }
    };
    g.k = vpb.prototype;
    g.k.IQ = 8;
    g.k.rh = 1;
    g.k.connect = function(a, b, c, d) {
        i8(0);
        this.Mc = a;
        this.Ja = b || {};
        c && void 0 !== d && (this.Ja.OSID = c, this.Ja.OAID = d);
        this.Ua = this.md;
        this.Ma = lpb(this, null, this.Mc);
        t8(this)
    };
    g.k.disconnect = function() {
        xpb(this);
        if (3 == this.rh) {
            var a = this.fb++,
                b = this.Ma.clone();
            g.il(b, "SID", this.C);
            g.il(b, "RID", a);
            g.il(b, "TYPE", "terminate");
            w8(this, b);
            a = new k8(this, this.C, a);
            a.Oa = 2;
            a.K = P7(b.clone());
            b = !1;
            if (g.La.navigator && g.La.navigator.sendBeacon) try {
                b = g.La.navigator.sendBeacon(a.K.toString(), "")
            } catch (c) {}!b && g.La.Image && ((new Image).src = a.K, b = !0);
            b || (a.j = $ob(a.D, null), a.j.send(a.K));
            a.Aa = Date.now();
            l8(a)
        }
        Dpb(this)
    };
    g.k.Yg = function() {
        return 0 == this.rh
    };
    g.k.getState = function() {
        return this.rh
    };
    g.k.KQ = function(a) {
        if (this.J)
            if (this.J = null, 1 == this.rh) {
                if (!a) {
                    this.fb = Math.floor(1E5 * Math.random());
                    a = this.fb++;
                    var b = new k8(this, "", a),
                        c = this.ea;
                    this.Ab && (c ? (c = g.hd(c), g.kd(c, this.Ab)) : c = this.Ab);
                    null !== this.K || this.ub || (b.Ma = c, c = null);
                    var d;
                    if (this.Hb) a: {
                        for (var e = d = 0; e < this.B.length; e++) {
                            b: {
                                var f = this.B[e];
                                if ("__data__" in f.map && (f = f.map.__data__, "string" === typeof f)) {
                                    f = f.length;
                                    break b
                                }
                                f = void 0
                            }
                            if (void 0 === f) break;d += f;
                            if (4096 < d) {
                                d = e;
                                break a
                            }
                            if (4096 === d || e === this.B.length - 1) {
                                d = e + 1;
                                break a
                            }
                        }
                        d =
                        1E3
                    }
                    else d = 1E3;
                    d = Apb(this, b, d);
                    e = this.Ma.clone();
                    g.il(e, "RID", a);
                    g.il(e, "CVER", 22);
                    this.Ba && g.il(e, "X-HTTP-Session-Id", this.Ba);
                    w8(this, e);
                    c && (this.ub ? d = "headers=" + g.ze(g.Dga(c)) + "&" + d : this.K && g.ml(e, this.K, c));
                    kpb(this.u, b);
                    this.cg && g.il(e, "TYPE", "init");
                    this.Hb ? (g.il(e, "$req", d), g.il(e, "SID", "null"), b.qc = !0, Zob(b, e, null)) : Zob(b, e, d);
                    this.rh = 2
                }
            } else 3 == this.rh && (a ? Bpb(this, a) : 0 == this.B.length || qpb(this.u) || Bpb(this))
    };
    g.k.JQ = function() {
        this.V = null;
        Cpb(this);
        if (this.Qc && !(this.qb || null == this.j || 0 >= this.od)) {
            var a = 2 * this.od;
            this.Da = j8((0, g.Wa)(this.v5, this), a)
        }
    };
    g.k.v5 = function() {
        this.Da && (this.Da = null, this.Ua = !1, this.qb = !0, i8(10), r8(this), Cpb(this))
    };
    g.k.zN = function(a) {
        this.j == a && this.Qc && !this.qb && (wpb(this), this.qb = !0, i8(11))
    };
    g.k.h_ = function() {
        null != this.ma && (this.ma = null, r8(this), ipb(this), i8(19))
    };
    g.k.i9 = function(a) {
        a ? i8(2) : i8(1)
    };
    g.k.isActive = function() {
        return !!this.D && this.D.isActive(this)
    };
    g.k = Fpb.prototype;
    g.k.OQ = function() {};
    g.k.NQ = function() {};
    g.k.MQ = function() {};
    g.k.LQ = function() {};
    g.k.isActive = function() {
        return !0
    };
    g.k.i_ = function() {};
    g.ab(y8, g.Cd);
    y8.prototype.open = function() {
        this.j.D = this.B;
        this.J && (this.j.Oa = !0);
        this.j.connect(this.D, this.u || void 0)
    };
    y8.prototype.close = function() {
        this.j.disconnect()
    };
    y8.prototype.send = function(a) {
        var b = this.j;
        if ("string" === typeof a) {
            var c = {};
            c.__data__ = a;
            a = c
        } else this.C && (c = {}, c.__data__ = g.Wi(a), a = c);
        b.B.push(new opb(b.Zf++, a));
        3 == b.rh && t8(b)
    };
    y8.prototype.ra = function() {
        this.j.D = null;
        delete this.B;
        this.j.disconnect();
        delete this.j;
        y8.Hf.ra.call(this)
    };
    g.ab(Hpb, Pob);
    g.ab(Ipb, Qob);
    g.ab(x8, Fpb);
    x8.prototype.OQ = function() {
        this.j.dispatchEvent("m")
    };
    x8.prototype.NQ = function(a) {
        this.j.dispatchEvent(new Hpb(a))
    };
    x8.prototype.MQ = function(a) {
        this.j.dispatchEvent(new Ipb(a))
    };
    x8.prototype.LQ = function() {
        this.j.dispatchEvent("n")
    };
    var A8 = new g.Cd;
    g.x(Lpb, g.tb);
    g.k = C8.prototype;
    g.k.au = null;
    g.k.Hp = !1;
    g.k.Uw = null;
    g.k.dJ = null;
    g.k.Sw = null;
    g.k.Tw = null;
    g.k.Dr = null;
    g.k.Fr = null;
    g.k.du = null;
    g.k.Si = null;
    g.k.yE = 0;
    g.k.Jn = null;
    g.k.xE = null;
    g.k.Er = null;
    g.k.zA = -1;
    g.k.zX = !0;
    g.k.Zt = !1;
    g.k.cJ = 0;
    g.k.wE = null;
    var Qpb = {},
        Ppb = {};
    g.k = C8.prototype;
    g.k.setTimeout = function(a) {
        this.u = a
    };
    g.k.k_ = function(a) {
        a = a.target;
        var b = this.wE;
        b && 3 == g.Aj(a) ? b.bJ() : this.PQ(a)
    };
    g.k.PQ = function(a) {
        try {
            if (a == this.Si) a: {
                var b = g.Aj(this.Si),
                    c = this.Si.u,
                    d = this.Si.getStatus();
                if (g.Ue && !g.Ic(10) || g.Jc && !g.Hc("420+")) {
                    if (4 > b) break a
                } else if (3 > b || 3 == b && !g.Cj(this.Si)) break a;this.Zt || 4 != b || 7 == c || (8 == c || 0 >= d ? this.j.un(3) : this.j.un(2));Vpb(this);
                var e = this.Si.getStatus();this.zA = e;
                var f = g.Cj(this.Si);
                if (this.Hp = 200 == e) {
                    4 == b && E8(this);
                    if (this.Ba) {
                        for (a = !0; !this.Zt && this.yE < f.length;) {
                            var h = Rpb(this, f);
                            if (h == Ppb) {
                                4 == b && (this.Er = 4, B8(15), a = !1);
                                break
                            } else if (h == Qpb) {
                                this.Er = 4;
                                B8(16);
                                a = !1;
                                break
                            } else Wpb(this, h)
                        }
                        4 == b && 0 == f.length && (this.Er = 1, B8(17), a = !1);
                        this.Hp = this.Hp && a;
                        a || (E8(this), F8(this))
                    } else Wpb(this, f);
                    this.Hp && !this.Zt && (4 == b ? this.j.zE(this) : (this.Hp = !1, D8(this)))
                } else 400 == e && 0 < f.indexOf("Unknown SID") ? (this.Er = 3, B8(13)) : (this.Er = 0, B8(14)),
                E8(this),
                F8(this)
            }
        } catch (l) {} finally {}
    };
    g.k.G7 = function(a) {
        z8((0, g.Wa)(this.F7, this, a), 0)
    };
    g.k.F7 = function(a) {
        this.Zt || (Vpb(this), Wpb(this, a), D8(this))
    };
    g.k.DW = function(a) {
        z8((0, g.Wa)(this.E7, this, a), 0)
    };
    g.k.E7 = function(a) {
        this.Zt || (E8(this), this.Hp = a, this.j.zE(this), this.j.un(4))
    };
    g.k.cancel = function() {
        this.Zt = !0;
        E8(this)
    };
    g.k.j_ = function() {
        this.Uw = null;
        var a = Date.now();
        0 <= a - this.dJ ? (2 != this.Tw && this.j.un(3), E8(this), this.Er = 2, B8(18), F8(this)) : Upb(this, this.dJ - a)
    };
    g.k.getLastError = function() {
        return this.Er
    };
    g.k = Zpb.prototype;
    g.k.fJ = null;
    g.k.vj = null;
    g.k.BH = !1;
    g.k.TX = null;
    g.k.wF = null;
    g.k.OM = null;
    g.k.gJ = null;
    g.k.Bl = null;
    g.k.Ip = -1;
    g.k.AA = null;
    g.k.VA = null;
    g.k.connect = function(a) {
        this.gJ = a;
        a = I8(this.j, null, this.gJ);
        B8(3);
        this.TX = Date.now();
        var b = this.j.ea;
        null != b ? (this.AA = b[0], (this.VA = b[1]) ? (this.Bl = 1, $pb(this)) : (this.Bl = 2, aqb(this))) : (Q7(a, "MODE", "init"), this.vj = new C8(this), this.vj.au = this.fJ, Opb(this.vj, a, !1, null, !0), this.Bl = 0)
    };
    g.k.Y1 = function(a) {
        if (a) this.Bl = 2, aqb(this);
        else {
            B8(4);
            var b = this.j;
            b.Qn = b.Ur.Ip;
            M8(b, 9)
        }
        a && this.un(2)
    };
    g.k.eJ = function(a) {
        return this.j.eJ(a)
    };
    g.k.abort = function() {
        this.vj && (this.vj.cancel(), this.vj = null);
        this.Ip = -1
    };
    g.k.Yg = function() {
        return !1
    };
    g.k.QQ = function(a, b) {
        this.Ip = a.zA;
        if (0 == this.Bl)
            if (b) {
                try {
                    var c = this.u.parse(b)
                } catch (d) {
                    a = this.j;
                    a.Qn = this.Ip;
                    M8(a, 2);
                    return
                }
                this.AA = c[0];
                this.VA = c[1]
            } else a = this.j, a.Qn = this.Ip, M8(a, 2);
        else if (2 == this.Bl)
            if (this.BH) B8(7), this.OM = Date.now();
            else if ("11111" == b) {
            if (B8(6), this.BH = !0, this.wF = Date.now(), a = this.wF - this.TX, !g.Ue || g.Ic(10) || 500 > a) this.Ip = 200, this.vj.cancel(), B8(12), J8(this.j, this, !0)
        } else B8(8), this.wF = this.OM = Date.now(), this.BH = !1
    };
    g.k.zE = function() {
        this.Ip = this.vj.zA;
        if (this.vj.Hp) 0 == this.Bl ? this.VA ? (this.Bl = 1, $pb(this)) : (this.Bl = 2, aqb(this)) : 2 == this.Bl && ((!g.Ue || g.Ic(10) ? !this.BH : 200 > this.OM - this.wF) ? (B8(11), J8(this.j, this, !1)) : (B8(12), J8(this.j, this, !0)));
        else {
            0 == this.Bl ? B8(9) : 2 == this.Bl && B8(10);
            var a = this.j;
            this.vj.getLastError();
            a.Qn = this.Ip;
            M8(a, 2)
        }
    };
    g.k.BA = function() {
        return this.j.BA()
    };
    g.k.isActive = function() {
        return this.j.isActive()
    };
    g.k.un = function(a) {
        this.j.un(a)
    };
    g.k = bqb.prototype;
    g.k.Pn = null;
    g.k.CA = null;
    g.k.Ej = null;
    g.k.Ig = null;
    g.k.hJ = null;
    g.k.AE = null;
    g.k.RQ = null;
    g.k.BE = null;
    g.k.DA = 0;
    g.k.m_ = 0;
    g.k.xi = null;
    g.k.Gr = null;
    g.k.Jp = null;
    g.k.ju = null;
    g.k.Ur = null;
    g.k.oI = null;
    g.k.Xw = -1;
    g.k.SQ = -1;
    g.k.Qn = -1;
    g.k.Ww = 0;
    g.k.Vw = 0;
    g.k.fu = 8;
    g.ab(dqb, g.tb);
    g.ab(eqb, g.tb);
    g.k = bqb.prototype;
    g.k.connect = function(a, b, c, d, e) {
        B8(0);
        this.hJ = b;
        this.CA = c || {};
        d && void 0 !== e && (this.CA.OSID = d, this.CA.OAID = e);
        this.V ? (z8((0, g.Wa)(this.XS, this, a), 100), gqb(this)) : this.XS(a)
    };
    g.k.disconnect = function() {
        hqb(this);
        if (3 == this.j) {
            var a = this.DA++,
                b = this.AE.clone();
            g.il(b, "SID", this.C);
            g.il(b, "RID", a);
            g.il(b, "TYPE", "terminate");
            L8(this, b);
            a = new C8(this, this.C, a);
            a.Tw = 2;
            a.Dr = P7(b.clone());
            (new Image).src = a.Dr.toString();
            a.Sw = Date.now();
            D8(a)
        }
        rqb(this)
    };
    g.k.XS = function(a) {
        this.Ur = new Zpb(this);
        this.Ur.fJ = this.Pn;
        this.Ur.u = this.D;
        this.Ur.connect(a)
    };
    g.k.Yg = function() {
        return 0 == this.j
    };
    g.k.getState = function() {
        return this.j
    };
    g.k.UQ = function(a) {
        this.Gr = null;
        mqb(this, a)
    };
    g.k.TQ = function() {
        this.Jp = null;
        this.Ig = new C8(this, this.C, "rpc", this.K);
        this.Ig.au = this.Pn;
        this.Ig.cJ = 0;
        var a = this.RQ.clone();
        g.il(a, "RID", "rpc");
        g.il(a, "SID", this.C);
        g.il(a, "CI", this.oI ? "0" : "1");
        g.il(a, "AID", this.Xw);
        L8(this, a);
        if (!g.Ue || g.Ic(10)) g.il(a, "TYPE", "xmlhttp"), Opb(this.Ig, a, !0, this.BE, !1);
        else {
            g.il(a, "TYPE", "html");
            var b = this.Ig,
                c = !!this.BE;
            b.Tw = 3;
            b.Dr = P7(a.clone());
            Tpb(b, c)
        }
    };
    g.k.QQ = function(a, b) {
        if (0 != this.j && (this.Ig == a || this.Ej == a))
            if (this.Qn = a.zA, this.Ej == a && 3 == this.j)
                if (7 < this.fu) {
                    try {
                        var c = this.D.parse(b)
                    } catch (d) {
                        c = null
                    }
                    if (Array.isArray(c) && 3 == c.length)
                        if (a = c, 0 == a[0]) a: {
                            if (!this.Jp) {
                                if (this.Ig)
                                    if (this.Ig.Sw + 3E3 < this.Ej.Sw) K8(this), this.Ig.cancel(), this.Ig = null;
                                    else break a;
                                pqb(this);
                                B8(19)
                            }
                        }
                    else this.SQ = a[1], 0 < this.SQ - this.Xw && 37500 > a[2] && this.oI && 0 == this.Vw && !this.ju && (this.ju = z8((0, g.Wa)(this.n_, this), 6E3));
                    else M8(this, 11)
                } else null != b && M8(this, 11);
        else if (this.Ig ==
            a && K8(this), !g.cc(b))
            for (a = this.D.parse(b), b = 0; b < a.length; b++) c = a[b], this.Xw = c[0], c = c[1], 2 == this.j ? "c" == c[0] ? (this.C = c[1], this.BE = c[2], c = c[3], null != c ? this.fu = c : this.fu = 6, this.j = 3, this.xi && this.xi.XQ(), this.RQ = I8(this, this.BA() ? this.BE : null, this.hJ), nqb(this)) : "stop" == c[0] && M8(this, 7) : 3 == this.j && ("stop" == c[0] ? M8(this, 7) : "noop" != c[0] && this.xi && this.xi.WQ(c), this.Vw = 0)
    };
    g.k.n_ = function() {
        null != this.ju && (this.ju = null, this.Ig.cancel(), this.Ig = null, pqb(this), B8(20))
    };
    g.k.zE = function(a) {
        if (this.Ig == a) {
            K8(this);
            this.Ig = null;
            var b = 2
        } else if (this.Ej == a) this.Ej = null, b = 1;
        else return;
        this.Qn = a.zA;
        if (0 != this.j)
            if (a.Hp)
                if (1 == b) {
                    b = Date.now() - a.Sw;
                    var c = A8;
                    c.dispatchEvent(new dqb(c, a.du ? a.du.length : 0, b, this.Ww));
                    fqb(this);
                    this.B.length = 0
                } else nqb(this);
        else {
            c = a.getLastError();
            var d;
            if (!(d = 3 == c || 7 == c || 0 == c && 0 < this.Qn)) {
                if (d = 1 == b) this.Ej || this.Gr || 1 == this.j || 2 <= this.Ww ? d = !1 : (this.Gr = z8((0, g.Wa)(this.UQ, this, a), oqb(this, this.Ww)), this.Ww++, d = !0);
                d = !(d || 2 == b && pqb(this))
            }
            if (d) switch (c) {
                case 1:
                    M8(this,
                        5);
                    break;
                case 4:
                    M8(this, 10);
                    break;
                case 3:
                    M8(this, 6);
                    break;
                case 7:
                    M8(this, 12);
                    break;
                default:
                    M8(this, 2)
            }
        }
    };
    g.k.l_ = function(a) {
        if (!g.Bb(arguments, this.j)) throw Error("Unexpected channel state: " + this.j);
    };
    g.k.h9 = function(a) {
        a ? B8(2) : (B8(1), qqb(this, 8))
    };
    g.k.eJ = function(a) {
        if (a) throw Error("Can't create secondary domain capable XhrIo object.");
        a = new g.xj;
        a.J = !1;
        return a
    };
    g.k.isActive = function() {
        return !!this.xi && this.xi.isActive(this)
    };
    g.k.un = function(a) {
        var b = A8;
        b.dispatchEvent(new eqb(b, a))
    };
    g.k.BA = function() {
        return !(!g.Ue || g.Ic(10))
    };
    g.k = sqb.prototype;
    g.k.XQ = function() {};
    g.k.WQ = function() {};
    g.k.VQ = function() {};
    g.k.iJ = function() {};
    g.k.YQ = function() {
        return {}
    };
    g.k.isActive = function() {
        return !0
    };
    g.k = tqb.prototype;
    g.k.isEmpty = function() {
        return 0 === this.j.length && 0 === this.u.length
    };
    g.k.clear = function() {
        this.j = [];
        this.u = []
    };
    g.k.contains = function(a) {
        return g.Bb(this.j, a) || g.Bb(this.u, a)
    };
    g.k.remove = function(a) {
        var b = this.j;
        var c = (0, g.s8a)(b, a);
        0 <= c ? (g.Cb(b, c), b = !0) : b = !1;
        return b || g.Db(this.u, a)
    };
    g.k.Sl = function() {
        for (var a = [], b = this.j.length - 1; 0 <= b; --b) a.push(this.j[b]);
        var c = this.u.length;
        for (b = 0; b < c; ++b) a.push(this.u[b]);
        return a
    };
    g.x(uqb, g.tb);
    g.x(vqb, g.tb);
    g.ab(N8, g.D);
    g.k = N8.prototype;
    g.k.y7 = function() {
        this.Ii = Math.min(3E5, 2 * this.Ii);
        this.B();
        this.u && this.start()
    };
    g.k.start = function() {
        var a = this.Ii + 15E3 * Math.random();
        g.Rp(this.j, a);
        this.u = Date.now() + a
    };
    g.k.stop = function() {
        this.j.stop();
        this.u = 0
    };
    g.k.isActive = function() {
        return this.j.isActive()
    };
    g.k.reset = function() {
        this.j.stop();
        this.Ii = 5E3
    };
    g.ab(xqb, sqb);
    g.k = xqb.prototype;
    g.k.subscribe = function(a, b, c) {
        return this.B.subscribe(a, b, c)
    };
    g.k.unsubscribe = function(a, b, c) {
        return this.B.unsubscribe(a, b, c)
    };
    g.k.Jh = function(a) {
        return this.B.Jh(a)
    };
    g.k.oa = function(a, b) {
        return this.B.oa.apply(this.B, arguments)
    };
    g.k.dispose = function() {
        this.ma || (this.ma = !0, g.kb(this.B), this.disconnect(), g.kb(this.u), this.u = null, this.qa = function() {
            return ""
        })
    };
    g.k.isDisposed = function() {
        return this.ma
    };
    g.k.connect = function(a, b, c) {
        if (!this.j || 2 != this.j.getState()) {
            this.ea = "";
            this.u.stop();
            this.J = a || null;
            this.D = b || 0;
            a = this.Aa + "/test";
            b = this.Aa + "/bind";
            var d = new bqb(c ? c.firstTestResults : null, c ? c.secondTestResults : null, this.Oa),
                e = this.j;
            e && (e.xi = null);
            d.xi = this;
            this.j = d;
            yqb(this);
            if (this.j) {
                d = g.zy("ID_TOKEN");
                var f = this.j.Pn || {};
                d ? f["x-youtube-identity-token"] = d : delete f["x-youtube-identity-token"];
                this.j.Pn = f
            }
            e ? (3 != e.getState() && 0 == jqb(e) || e.getState(), this.j.connect(a, b, this.K, e.C, e.Xw)) : c ? this.j.connect(a,
                b, this.K, c.sessionId, c.arrayId) : this.j.connect(a, b, this.K)
        }
    };
    g.k.disconnect = function(a) {
        this.V = a || 0;
        this.u.stop();
        yqb(this);
        this.j && (3 == this.j.getState() && mqb(this.j), this.j.disconnect());
        this.V = 0
    };
    g.k.sendMessage = function(a, b) {
        a = {
            _sc: a
        };
        b && g.kd(a, b);
        this.u.isActive() || 2 == (this.j ? this.j.getState() : 0) ? this.C.push(a) : this.My() && (yqb(this), iqb(this.j, a))
    };
    g.k.XQ = function() {
        this.u.reset();
        this.J = null;
        this.D = 0;
        if (this.C.length) {
            var a = this.C;
            this.C = [];
            for (var b = 0, c = a.length; b < c; ++b) iqb(this.j, a[b])
        }
        this.oa("handlerOpened");
        Wnb(this.Ma, "BROWSER_CHANNEL")
    };
    g.k.VQ = function(a) {
        var b = 2 == a && 401 == this.j.Qn;
        4 == a || b || this.u.start();
        this.oa("handlerError", a, b);
        bob(this.Ba, "BROWSER_CHANNEL")
    };
    g.k.iJ = function(a, b) {
        if (!this.u.isActive()) this.oa("handlerClosed");
        else if (b)
            for (var c = 0, d = b.length; c < d; ++c) {
                var e = b[c].map;
                e && this.C.push(e)
            }
        Ynb(this.Da, "BROWSER_CHANNEL");
        a && this.Za.j.jJ("/client_streamz/youtube/living_room/mdx/browser_channel/pending_maps", a.length);
        b && this.fb.j.jJ("/client_streamz/youtube/living_room/mdx/browser_channel/undelivered_maps", b.length)
    };
    g.k.YQ = function() {
        var a = {
            v: 2
        };
        this.ea && (a.gsessionid = this.ea);
        0 != this.D && (a.ui = "" + this.D);
        0 != this.V && (a.ui = "" + this.V);
        this.J && g.kd(a, this.J);
        return a
    };
    g.k.WQ = function(a) {
        "S" == a[0] ? this.ea = a[1] : "gracefulReconnect" == a[0] ? (this.u.start(), this.j.disconnect()) : this.oa("handlerMessage", new wqb(a[0], a[1]));
        $nb(this.Ja, "BROWSER_CHANNEL")
    };
    g.k.My = function() {
        return !!this.j && 3 == this.j.getState()
    };
    g.k.Xq = function(a) {
        (this.K.loungeIdToken = a) || this.u.stop();
        if (this.Ua && this.j) {
            var b = this.j.Pn || {};
            a ? b["X-YouTube-LoungeId-Token"] = a : delete b["X-YouTube-LoungeId-Token"];
            this.j.Pn = b
        }
    };
    g.k.ys = function() {
        return this.K.id
    };
    g.k.Hs = function() {
        return this.u.isActive() ? this.u.u - Date.now() : NaN
    };
    g.k.Wv = function() {
        var a = this.u;
        g.Sp(a.j);
        a.start()
    };
    g.k.D8 = function() {
        this.u.isActive();
        0 == jqb(this.j) && this.connect(this.J, this.D)
    };
    O8.prototype.C = function(a, b, c, d) {
        b ? a(d) : a({
            text: c.responseText
        })
    };
    O8.prototype.B = function(a, b) {
        a(Error("Request error: " + b.status))
    };
    O8.prototype.D = function(a) {
        a(Error("request timed out"))
    };
    g.x(Aqb, g.Cd);
    g.k = Aqb.prototype;
    g.k.connect = function(a, b, c) {
        this.Ad.connect(a, b, c)
    };
    g.k.disconnect = function(a) {
        this.Ad.disconnect(a)
    };
    g.k.Wv = function() {
        this.Ad.Wv()
    };
    g.k.ys = function() {
        return this.Ad.ys()
    };
    g.k.Hs = function() {
        return this.Ad.Hs()
    };
    g.k.My = function() {
        return this.Ad.My()
    };
    g.k.q_ = function() {
        this.dispatchEvent("channelOpened");
        var a = this.Ad,
            b = this.j;
        g.lA("yt-remote-session-browser-channel", {
            firstTestResults: [""],
            secondTestResults: !a.j.oI,
            sessionId: a.j.C,
            arrayId: a.j.Xw
        });
        g.lA("yt-remote-session-screen-id", b);
        a = Y7();
        b = Z7();
        g.Bb(a, b) || a.push(b);
        sob(a);
        uob()
    };
    g.k.o_ = function() {
        this.dispatchEvent("channelClosed")
    };
    g.k.p_ = function(a) {
        this.dispatchEvent(new uqb(a))
    };
    g.k.onError = function(a) {
        this.dispatchEvent(new vqb(a ? 1 : 0))
    };
    g.k.sendMessage = function(a, b) {
        this.Ad.sendMessage(a, b)
    };
    g.k.Xq = function(a) {
        this.Ad.Xq(a)
    };
    g.k.dispose = function() {
        this.Ad.dispose()
    };
    g.k = Bqb.prototype;
    g.k.connect = function(a, b) {
        a = void 0 === a ? {} : a;
        b = void 0 === b ? 0 : b;
        2 !== this.J && (this.B.stop(), this.V = a, this.K = b, Dqb(this), (a = g.zy("ID_TOKEN")) ? this.C["x-youtube-identity-token"] = a : delete this.C["x-youtube-identity-token"], this.j && (this.u.device = this.j.device, this.u.name = this.j.name, this.u.app = this.j.app, this.u.id = this.j.id, this.j.G4 && (this.u.mdxVersion = "" + this.j.G4), this.j.theme && (this.u.theme = this.j.theme), this.j.capabilities && (this.u.capabilities = this.j.capabilities), this.j.u2 && (this.u.cst = this.j.u2),
            this.j.authuser && (this.u.authuser = this.j.authuser), this.j.pageId && (this.u.pageId = this.j.pageId)), 0 !== this.K ? this.u.ui = "" + this.K : delete this.u.ui, Object.assign(this.u, this.V), this.channel = new y8(this.pathPrefix, {
            Z3: "gsessionid",
            K4: this.C,
            L4: this.u
        }), this.channel.open(), this.J = 2, Cqb(this))
    };
    g.k.disconnect = function(a) {
        this.ea = void 0 === a ? 0 : a;
        this.B.stop();
        Dqb(this);
        this.channel && (0 !== this.ea ? this.u.ui = "" + this.ea : delete this.u.ui, this.channel.close());
        this.ea = 0
    };
    g.k.Hs = function() {
        return this.B.isActive() ? this.B.u - Date.now() : NaN
    };
    g.k.Wv = function() {
        var a = this.B;
        g.Sp(a.j);
        a.start()
    };
    g.k.sendMessage = function(a, b) {
        this.channel && (Dqb(this), a = Object.assign({}, {
            _sc: a
        }, b), this.channel.send(a))
    };
    g.k.Xq = function(a) {
        a || this.B.stop();
        a ? this.C["X-YouTube-LoungeId-Token"] = a : delete this.C["X-YouTube-LoungeId-Token"]
    };
    g.k.ys = function() {
        return this.j ? this.j.id : ""
    };
    g.k.oa = function(a) {
        return this.D.oa.apply(this.D, [a].concat(g.oa(g.Ea.apply(1, arguments))))
    };
    g.k.subscribe = function(a, b, c) {
        return this.D.subscribe(a, b, c)
    };
    g.k.unsubscribe = function(a, b, c) {
        return this.D.unsubscribe(a, b, c)
    };
    g.k.Jh = function(a) {
        return this.D.Jh(a)
    };
    g.k.dispose = function() {
        this.ma || (this.ma = !0, g.kb(this.D), this.disconnect(), g.kb(this.B), this.Aa = function() {
            return ""
        })
    };
    g.k.isDisposed = function() {
        return this.ma
    };
    g.x(Eqb, g.Cd);
    g.k = Eqb.prototype;
    g.k.connect = function(a, b) {
        this.j.connect(a, b)
    };
    g.k.disconnect = function(a) {
        this.j.disconnect(a)
    };
    g.k.Wv = function() {
        this.j.Wv()
    };
    g.k.ys = function() {
        return this.j.ys()
    };
    g.k.Hs = function() {
        return this.j.Hs()
    };
    g.k.My = function() {
        return 3 === this.j.J
    };
    g.k.t_ = function() {
        this.dispatchEvent("channelOpened")
    };
    g.k.r_ = function() {
        this.dispatchEvent("channelClosed")
    };
    g.k.s_ = function(a) {
        this.dispatchEvent(new uqb(a))
    };
    g.k.onError = function() {
        this.dispatchEvent(new vqb(401 === this.j.Lg ? 1 : 0))
    };
    g.k.sendMessage = function(a, b) {
        this.j.sendMessage(a, b)
    };
    g.k.Xq = function(a) {
        this.j.Xq(a)
    };
    g.k.dispose = function() {
        this.j.dispose()
    };
    var Mqb = Date.now(),
        Q8 = null,
        U8 = Array(50),
        T8 = -1,
        V8 = !1;
    g.ab(W8, g.yE);
    W8.prototype.Ak = function() {
        return this.screens
    };
    W8.prototype.contains = function(a) {
        return !!pob(this.screens, a)
    };
    W8.prototype.get = function(a) {
        return a ? X7(this.screens, a) : null
    };
    W8.prototype.info = function(a) {
        R8(this.J, a)
    };
    g.x(Qqb, g.yE);
    g.k = Qqb.prototype;
    g.k.start = function() {
        !this.j && isNaN(this.Hc) && this.QW()
    };
    g.k.stop = function() {
        this.j && (this.j.abort(), this.j = null);
        isNaN(this.Hc) || (g.Zy(this.Hc), this.Hc = NaN)
    };
    g.k.ra = function() {
        this.stop();
        g.yE.prototype.ra.call(this)
    };
    g.k.QW = function() {
        this.Hc = NaN;
        this.j = g.bz(P8(this.B, "/pairing/get_screen"), {
            method: "POST",
            postParams: {
                pairing_code: this.K
            },
            timeout: 5E3,
            onSuccess: (0, g.Wa)(this.v_, this),
            onError: (0, g.Wa)(this.u_, this),
            onTimeout: (0, g.Wa)(this.w_, this)
        })
    };
    g.k.v_ = function(a, b) {
        this.j = null;
        a = b.screen || {};
        a.dialId = this.C;
        a.name = this.J;
        b = -1;
        this.D && a.shortLivedLoungeToken && a.shortLivedLoungeToken.value && a.shortLivedLoungeToken.refreshIntervalMs && (a.screenIdType = "shortLived", a.loungeToken = a.shortLivedLoungeToken.value, b = a.shortLivedLoungeToken.refreshIntervalMs);
        this.oa("pairingComplete", new U7(a), b)
    };
    g.k.u_ = function(a) {
        this.j = null;
        a.status && 404 == a.status ? this.u >= Ksb.length ? this.oa("pairingFailed", Error("DIAL polling timed out")) : (a = Ksb[this.u], this.Hc = g.Xy((0, g.Wa)(this.QW, this), a), this.u++) : this.oa("pairingFailed", Error("Server error " + a.status))
    };
    g.k.w_ = function() {
        this.j = null;
        this.oa("pairingFailed", Error("Server not responding"))
    };
    var Ksb = [2E3, 2E3, 1E3, 1E3, 1E3, 2E3, 2E3, 5E3, 5E3, 1E4];
    g.ab(Y8, W8);
    g.k = Y8.prototype;
    g.k.start = function() {
        X8(this) && this.oa("screenChange");
        !g.mA("yt-remote-lounge-token-expiration") && Rqb(this);
        g.Zy(this.j);
        this.j = g.Xy((0, g.Wa)(this.start, this), 1E4)
    };
    g.k.add = function(a, b) {
        X8(this);
        Nqb(this, a);
        Z8(this, !1);
        this.oa("screenChange");
        b(a);
        a.token || Rqb(this)
    };
    g.k.remove = function(a, b) {
        var c = X8(this);
        Pqb(this, a) && (Z8(this, !1), c = !0);
        b(a);
        c && this.oa("screenChange")
    };
    g.k.nI = function(a, b, c, d) {
        var e = X8(this),
            f = this.get(a.id);
        f ? (f.name != b && (f.name = b, Z8(this, !1), e = !0), c(a)) : d(Error("no such local screen."));
        e && this.oa("screenChange")
    };
    g.k.ra = function() {
        g.Zy(this.j);
        Y8.Hf.ra.call(this)
    };
    g.k.A3 = function(a) {
        X8(this);
        var b = this.screens.length;
        a = a && a.screens || [];
        for (var c = 0, d = a.length; c < d; ++c) {
            var e = a[c],
                f = this.get(e.screenId);
            f && (f.token = e.loungeToken, --b)
        }
        Z8(this, !b);
        b && R8(this.J, "Missed " + b + " lounge tokens.")
    };
    g.k.z3 = function(a) {
        R8(this.J, "Requesting lounge tokens failed: " + a)
    };
    g.x(Tqb, g.yE);
    g.k = Tqb.prototype;
    g.k.start = function() {
        var a = parseInt(g.mA("yt-remote-fast-check-period") || "0", 10);
        (this.C = g.Ya() - 144E5 < a ? 0 : a) ? $8(this): (this.C = g.Ya() + 3E5, g.lA("yt-remote-fast-check-period", this.C), this.IO())
    };
    g.k.isEmpty = function() {
        return g.cd(this.j)
    };
    g.k.update = function() {
        Sqb("Updating availability on schedule.");
        var a = this.J(),
            b = g.Tc(this.j, function(c, d) {
                return c && !!X7(a, d)
            }, this);
        Wqb(this, b)
    };
    g.k.ra = function() {
        g.Zy(this.B);
        this.B = NaN;
        this.u && (this.u.abort(), this.u = null);
        g.yE.prototype.ra.call(this)
    };
    g.k.IO = function() {
        g.Zy(this.B);
        this.B = NaN;
        this.u && this.u.abort();
        var a = Xqb(this);
        if (Rnb(a)) {
            var b = P8(this.D, "/pairing/get_screen_availability");
            this.u = zqb(this.D, b, {
                lounge_token: g.Zc(a).join(",")
            }, (0, g.Wa)(this.e7, this, a), (0, g.Wa)(this.d7, this))
        } else Wqb(this, {}), $8(this)
    };
    g.k.e7 = function(a, b) {
        this.u = null;
        var c = g.Zc(Xqb(this));
        if (g.Ub(c, g.Zc(a))) {
            b = b.screens || [];
            c = {};
            for (var d = b.length, e = 0; e < d; ++e) c[a[b[e].loungeToken]] = "online" == b[e].status;
            Wqb(this, c);
            $8(this)
        } else this.Wf("Changing Screen set during request."), this.IO()
    };
    g.k.d7 = function(a) {
        this.Wf("Screen availability failed: " + a);
        this.u = null;
        $8(this)
    };
    g.k.Wf = function(a) {
        R8("OnlineScreenService", a)
    };
    g.ab(a9, W8);
    g.k = a9.prototype;
    g.k.start = function() {
        this.u.start();
        this.j.start();
        this.screens.length && (this.oa("screenChange"), this.j.isEmpty() || this.oa("onlineScreenChange"))
    };
    g.k.add = function(a, b, c) {
        this.u.add(a, b, c)
    };
    g.k.remove = function(a, b, c) {
        this.u.remove(a, b, c);
        this.j.update()
    };
    g.k.nI = function(a, b, c, d) {
        this.u.contains(a) ? this.u.nI(a, b, c, d) : (a = "Updating name of unknown screen: " + a.name, R8(this.J, a), d(Error(a)))
    };
    g.k.Ak = function(a) {
        return a ? this.screens : g.Fb(this.screens, g.fo(this.B, function(b) {
            return !this.contains(b)
        }, this))
    };
    g.k.ZQ = function() {
        return g.fo(this.Ak(!0), function(a) {
            return !!this.j.j[a.id]
        }, this)
    };
    g.k.aR = function(a, b, c, d, e, f) {
        var h = this;
        this.info("getDialScreenByPairingCode " + a + " / " + b);
        var l = new Qqb(this.C, a, b, c, d);
        l.subscribe("pairingComplete", function(m, n) {
            g.kb(l);
            e(b9(h, m), n)
        });
        l.subscribe("pairingFailed", function(m) {
            g.kb(l);
            f(m)
        });
        l.start();
        return (0, g.Wa)(l.stop, l)
    };
    g.k.x_ = function(a, b, c, d) {
        g.bz(P8(this.C, "/pairing/get_screen"), {
            method: "POST",
            postParams: {
                pairing_code: a
            },
            timeout: 5E3,
            onSuccess: (0, g.Wa)(function(e, f) {
                e = new U7(f.screen || {});
                if (!e.name || arb(this, e.name)) {
                    a: {
                        f = e.name;
                        for (var h = 2, l = b(f, h); arb(this, l);) {
                            h++;
                            if (20 < h) break a;
                            l = b(f, h)
                        }
                        f = l
                    }
                    e.name = f
                }
                c(b9(this, e))
            }, this),
            onError: (0, g.Wa)(function(e) {
                d(Error("pairing request failed: " + e.status))
            }, this),
            onTimeout: (0, g.Wa)(function() {
                d(Error("pairing request timed out."))
            }, this)
        })
    };
    g.k.ra = function() {
        g.kb(this.u);
        g.kb(this.j);
        a9.Hf.ra.call(this)
    };
    g.k.J3 = function() {
        crb(this);
        this.oa("screenChange");
        this.j.update()
    };
    a9.prototype.dispose = a9.prototype.dispose;
    g.ab(c9, g.yE);
    g.k = c9.prototype;
    g.k.jj = function(a) {
        this.isDisposed() || (a && (e9(this, "" + a), this.oa("sessionFailed")), this.j = null, this.oa("sessionScreen", null))
    };
    g.k.info = function(a) {
        R8(this.Ba, a)
    };
    g.k.bR = function() {
        return null
    };
    g.k.XO = function(a) {
        var b = this.u;
        a ? (b.displayStatus = new chrome.cast.ReceiverDisplayStatus(a, []), b.displayStatus.showStop = !0) : b.displayStatus = null;
        chrome.cast.setReceiverDisplayStatus(b, (0, g.Wa)(function() {
            this.info("Updated receiver status for " + b.friendlyName + ": " + a)
        }, this), (0, g.Wa)(function() {
            e9(this, "Failed to update receiver status for: " + b.friendlyName)
        }, this))
    };
    g.k.ra = function() {
        this.XO("");
        c9.Hf.ra.call(this)
    };
    g.x(f9, c9);
    g.k = f9.prototype;
    g.k.WO = function(a) {
        if (this.B) {
            if (this.B == a) return;
            e9(this, "Overriding cast session with new session object");
            orb(this);
            this.Aa = !1;
            this.ea = "unknown";
            this.B.removeUpdateListener(this.qa);
            this.B.removeMessageListener("urn:x-cast:com.google.youtube.mdx", this.Da)
        }
        this.B = a;
        this.B.addUpdateListener(this.qa);
        this.B.addMessageListener("urn:x-cast:com.google.youtube.mdx", this.Da);
        jrb(this, "getMdxSessionStatus")
    };
    g.k.Vy = function(a) {
        this.info("launchWithParams no-op for Cast: " + g.Wi(a))
    };
    g.k.stop = function() {
        this.B ? this.B.stop((0, g.Wa)(function() {
            this.jj()
        }, this), (0, g.Wa)(function() {
            this.jj(Error("Failed to stop receiver app."))
        }, this)) : this.jj(Error("Stopping cast device without session."))
    };
    g.k.XO = function() {};
    g.k.ra = function() {
        this.info("disposeInternal");
        orb(this);
        this.B && (this.B.removeUpdateListener(this.qa), this.B.removeMessageListener("urn:x-cast:com.google.youtube.mdx", this.Da));
        this.B = null;
        c9.prototype.ra.call(this)
    };
    g.k.P7 = function(a, b) {
        if (!this.isDisposed())
            if (b)
                if (b = R7(b), g.Ra(b)) switch (a = "" + b.type, b = b.data || {}, this.info("onYoutubeMessage_: " + a + " " + g.Wi(b)), a) {
                    case "mdxSessionStatus":
                        grb(this, b);
                        break;
                    case "loungeToken":
                        krb(this, b);
                        break;
                    default:
                        e9(this, "Unknown youtube message: " + a)
                } else e9(this, "Unable to parse message.");
                else e9(this, "No data in message.")
    };
    g.k.dU = function(a, b, c, d) {
        g.Zy(this.V);
        this.V = 0;
        $qb(this.C, this.u.label, a, this.u.friendlyName, (0, g.Wa)(function(e) {
            e ? b(e) : 0 <= d ? (e9(this, "Screen " + a + " appears to be offline. " + d + " retries left."), this.V = g.Xy((0, g.Wa)(this.dU, this, a, b, c, d - 1), 300)) : c(Error("Unable to fetch screen."))
        }, this), c)
    };
    g.k.bR = function() {
        return this.B
    };
    g.k.y_ = function(a) {
        this.isDisposed() || a || (e9(this, "Cast session died."), this.jj())
    };
    g.x(g9, c9);
    g.k = g9.prototype;
    g.k.WO = function(a) {
        this.B = a;
        this.B.addUpdateListener(this.Ja)
    };
    g.k.Vy = function(a) {
        this.Ma = a;
        this.ma()
    };
    g.k.stop = function() {
        wrb(this);
        this.B ? this.B.stop((0, g.Wa)(this.jj, this, null), (0, g.Wa)(this.jj, this, "Failed to stop DIAL device.")) : this.jj()
    };
    g.k.ra = function() {
        wrb(this);
        this.B && this.B.removeUpdateListener(this.Ja);
        this.B = null;
        c9.prototype.ra.call(this)
    };
    g.k.z_ = function(a) {
        this.isDisposed() || a || (e9(this, "DIAL session died."), this.D(), this.D = function() {}, this.jj())
    };
    g.x(j9, c9);
    j9.prototype.stop = function() {
        this.jj()
    };
    j9.prototype.WO = function() {};
    j9.prototype.Vy = function() {
        g.Zy(this.B);
        this.B = NaN;
        var a = X7(this.C.Ak(), this.u.label);
        a ? d9(this, a) : this.jj(Error("No such screen"))
    };
    j9.prototype.ra = function() {
        g.Zy(this.B);
        this.B = NaN;
        c9.prototype.ra.call(this)
    };
    g.x(k9, g.yE);
    g.k = k9.prototype;
    g.k.init = function(a, b) {
        chrome.cast.timeout.requestSession = 3E4;
        var c = new chrome.cast.SessionRequest(this.V, [chrome.cast.Capability.AUDIO_OUT]);
        this.ea || (c.dialRequest = new chrome.cast.DialRequest("YouTube"));
        var d = chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED;
        a = a || this.J ? chrome.cast.DefaultActionPolicy.CAST_THIS_TAB : chrome.cast.DefaultActionPolicy.CREATE_SESSION;
        var e = (0, g.Wa)(this.O6, this);
        c = new chrome.cast.ApiConfig(c, (0, g.Wa)(this.xW, this), e, d, a);
        c.customDialLaunchCallback = (0, g.Wa)(this.M5, this);
        chrome.cast.initialize(c, (0, g.Wa)(function() {
            this.isDisposed() || (chrome.cast.addReceiverActionListener(this.D), Jqb(), this.u.subscribe("onlineScreenChange", (0, g.Wa)(this.cR, this)), this.B = zrb(this), chrome.cast.setCustomReceivers(this.B, function() {}, (0, g.Wa)(function(f) {
                this.Wf("Failed to set initial custom receivers: " + g.Wi(f))
            }, this)), this.oa("yt-remote-cast2-availability-change", m9(this)), b(!0))
        }, this), (0, g.Wa)(function(f) {
            this.Wf("Failed to initialize API: " + g.Wi(f));
            b(!1)
        }, this))
    };
    g.k.I8 = function(a, b) {
        l9("Setting connected screen ID: " + a + " -> " + b);
        if (this.j) {
            var c = this.j.j;
            if (!a || c && c.id != a) l9("Unsetting old screen status: " + this.j.u.friendlyName), n9(this, null)
        }
        if (a && b) {
            if (!this.j) {
                c = X7(this.u.Ak(), a);
                if (!c) {
                    l9("setConnectedScreenStatus: Unknown screen.");
                    return
                }
                if ("shortLived" == c.idType) {
                    l9("setConnectedScreenStatus: Screen with id type to be short lived.");
                    return
                }
                a = xrb(this, c);
                a || (l9("setConnectedScreenStatus: Connected receiver not custom..."), a = new chrome.cast.Receiver(c.uuid ?
                    c.uuid : c.id, c.name), a.receiverType = chrome.cast.ReceiverType.CUSTOM, this.B.push(a), chrome.cast.setCustomReceivers(this.B, function() {}, (0, g.Wa)(function(d) {
                    this.Wf("Failed to set initial custom receivers: " + g.Wi(d))
                }, this)));
                l9("setConnectedScreenStatus: new active receiver: " + a.friendlyName);
                n9(this, new j9(this.u, a), !0)
            }
            this.j.XO(b)
        } else l9("setConnectedScreenStatus: no screen.")
    };
    g.k.K8 = function(a) {
        this.isDisposed() ? this.Wf("Setting connection data on disposed cast v2") : this.j ? this.j.Vy(a) : this.Wf("Setting connection data without a session")
    };
    g.k.B_ = function() {
        this.isDisposed() ? this.Wf("Stopping session on disposed cast v2") : this.j ? (this.j.stop(), n9(this, null)) : l9("Stopping non-existing session")
    };
    g.k.requestSession = function() {
        chrome.cast.requestSession((0, g.Wa)(this.xW, this), (0, g.Wa)(this.h7, this))
    };
    g.k.ra = function() {
        this.u.unsubscribe("onlineScreenChange", (0, g.Wa)(this.cR, this));
        window.chrome && chrome.cast && chrome.cast.removeReceiverActionListener(this.D);
        var a = Gqb,
            b = g.Na("yt.mdx.remote.debug.handlers_");
        g.Db(b || [], a);
        g.kb(this.j);
        g.yE.prototype.ra.call(this)
    };
    g.k.Wf = function(a) {
        R8("Controller", a)
    };
    g.k.zW = function(a, b) {
        this.j == a && (b || n9(this, null), this.oa("yt-remote-cast2-session-change", b))
    };
    g.k.L6 = function(a, b) {
        if (!this.isDisposed())
            if (a) switch (a.friendlyName = chrome.cast.unescape(a.friendlyName), l9("onReceiverAction_ " + a.label + " / " + a.friendlyName + "-- " + b), b) {
                case chrome.cast.ReceiverAction.CAST:
                    if (this.j)
                        if (this.j.u.label != a.label) l9("onReceiverAction_: Stopping active receiver: " + this.j.u.friendlyName), this.j.stop();
                        else {
                            l9("onReceiverAction_: Casting to active receiver.");
                            this.j.j && this.oa("yt-remote-cast2-session-change", this.j.j);
                            break
                        }
                    switch (a.receiverType) {
                        case chrome.cast.ReceiverType.CUSTOM:
                            n9(this,
                                new j9(this.u, a));
                            break;
                        case chrome.cast.ReceiverType.DIAL:
                            n9(this, new g9(this.u, a, this.C, this.config_));
                            break;
                        case chrome.cast.ReceiverType.CAST:
                            n9(this, new f9(this.u, a, this.config_));
                            break;
                        default:
                            this.Wf("Unknown receiver type: " + a.receiverType)
                    }
                    break;
                case chrome.cast.ReceiverAction.STOP:
                    this.j && this.j.u.label == a.label ? this.j.stop() : this.Wf("Stopping receiver w/o session: " + a.friendlyName)
            } else this.Wf("onReceiverAction_ called without receiver.")
    };
    g.k.M5 = function(a) {
        if (this.isDisposed()) return Promise.reject(Error("disposed"));
        var b = a.receiver;
        b.receiverType != chrome.cast.ReceiverType.DIAL && (this.Wf("Not DIAL receiver: " + b.friendlyName), b.receiverType = chrome.cast.ReceiverType.DIAL);
        var c = this.j ? this.j.u : null;
        if (!c || c.label != b.label) return this.Wf("Receiving DIAL launch request for non-clicked DIAL receiver: " + b.friendlyName), Promise.reject(Error("illegal DIAL launch"));
        if (c && c.label == b.label && c.receiverType != chrome.cast.ReceiverType.DIAL) {
            if (this.j.j) return l9("Reselecting dial screen."),
                this.oa("yt-remote-cast2-session-change", this.j.j), Promise.resolve(new chrome.cast.DialLaunchResponse(!1));
            this.Wf('Changing CAST intent from "' + c.receiverType + '" to "dial" for ' + b.friendlyName);
            n9(this, new g9(this.u, b, this.C, this.config_))
        }
        b = this.j;
        b.V = a;
        b.V.appState == chrome.cast.DialAppState.RUNNING ? (a = b.V.extraData || {}, c = a.screenId || null, h9(b) && a.loungeToken ? a.loungeTokenRefreshIntervalMs ? a = trb(b, {
                name: b.u.friendlyName,
                screenId: a.screenId,
                loungeToken: a.loungeToken,
                dialId: b.V.receiver.label,
                screenIdType: "shortLived"
            },
            a.loungeTokenRefreshIntervalMs) : (g.Hy(Error("No loungeTokenRefreshIntervalMs presents in additionalData: " + JSON.stringify(a) + ".")), a = urb(b, c)) : a = urb(b, c)) : a = rrb(b);
        return a
    };
    g.k.xW = function(a) {
        var b = this;
        if (!this.isDisposed() && !this.J) {
            l9("New cast session ID: " + a.sessionId);
            var c = a.receiver;
            if (c.receiverType != chrome.cast.ReceiverType.CUSTOM) {
                if (!this.j)
                    if (c.receiverType == chrome.cast.ReceiverType.CAST) l9("Got resumed cast session before resumed mdx connection."), c.friendlyName = chrome.cast.unescape(c.friendlyName), n9(this, new f9(this.u, c, this.config_), !0);
                    else {
                        this.Wf("Got non-cast session without previous mdx receiver event, or mdx resume.");
                        return
                    }
                var d = this.j.u,
                    e = X7(this.u.Ak(),
                        d.label);
                e && V7(e, c.label) && d.receiverType != chrome.cast.ReceiverType.CAST && c.receiverType == chrome.cast.ReceiverType.CAST && (l9("onSessionEstablished_: manual to cast session change " + c.friendlyName), g.kb(this.j), this.j = new f9(this.u, c, this.config_), this.j.subscribe("sessionScreen", (0, g.Wa)(this.zW, this, this.j)), this.j.subscribe("sessionFailed", function() {
                    return yrb(b, b.j)
                }), this.j.Vy(null));
                this.j.WO(a)
            }
        }
    };
    g.k.A_ = function() {
        return this.j ? this.j.bR() : null
    };
    g.k.h7 = function(a) {
        this.isDisposed() || (this.Wf("Failed to estabilish a session: " + g.Wi(a)), a.code != chrome.cast.ErrorCode.CANCEL && n9(this, null), this.oa("yt-remote-cast2-session-failed"))
    };
    g.k.O6 = function(a) {
        l9("Receiver availability updated: " + a);
        if (!this.isDisposed()) {
            var b = m9(this);
            this.K = a == chrome.cast.ReceiverAvailability.AVAILABLE;
            m9(this) != b && this.oa("yt-remote-cast2-availability-change", m9(this))
        }
    };
    g.k.cR = function() {
        this.isDisposed() || (this.B = zrb(this), l9("Updating custom receivers: " + g.Wi(this.B)), chrome.cast.setCustomReceivers(this.B, function() {}, (0, g.Wa)(function() {
            this.Wf("Failed to set custom receivers.")
        }, this)), this.oa("yt-remote-cast2-availability-change", m9(this)))
    };
    k9.prototype.setLaunchParams = k9.prototype.K8;
    k9.prototype.setConnectedScreenStatus = k9.prototype.I8;
    k9.prototype.stopSession = k9.prototype.B_;
    k9.prototype.getCastSession = k9.prototype.A_;
    k9.prototype.requestSession = k9.prototype.requestSession;
    k9.prototype.init = k9.prototype.init;
    k9.prototype.dispose = k9.prototype.dispose;
    var Irb = [];
    g.k = u9.prototype;
    g.k.reset = function(a) {
        this.listId = "";
        this.index = -1;
        this.videoId = "";
        Orb(this);
        this.volume = -1;
        this.muted = !1;
        a && (this.index = a.index, this.listId = a.listId, this.videoId = a.videoId, this.playerState = a.playerState, this.volume = a.volume, this.muted = a.muted, this.audioTrackId = a.audioTrackId, this.trackData = a.trackData, this.Qo = a.hasPrevious, this.Ek = a.hasNext, this.K = a.playerTime, this.J = a.playerTimeAt, this.C = a.seekableStart, this.j = a.seekableEnd, this.D = a.duration, this.V = a.loadedTime, this.B = a.liveIngestionTime, this.u = !isNaN(this.B))
    };
    g.k.hd = function() {
        return 1 == this.playerState
    };
    g.k.Xk = function(a) {
        this.D = isNaN(a) ? 0 : a
    };
    g.k.getDuration = function() {
        return this.u ? this.D + v9(this) : this.D
    };
    g.k.clone = function() {
        return new u9(Prb(this))
    };
    g.x(A9, g.yE);
    g.k = A9.prototype;
    g.k.getState = function() {
        return this.B
    };
    g.k.Hs = function() {
        return this.C.getReconnectTimeout()
    };
    g.k.Wv = function() {
        this.C.reconnect()
    };
    g.k.play = function() {
        C9(this) ? (this.j ? this.j.play(null, g.Gd, G9(this, "play")) : F9(this, "play"), Srb(this, 1, x9(B9(this))), this.oa("remotePlayerChange")) : D9(this, this.play)
    };
    g.k.pause = function() {
        C9(this) ? (this.j ? this.j.pause(null, g.Gd, G9(this, "pause")) : F9(this, "pause"), Srb(this, 2, x9(B9(this))), this.oa("remotePlayerChange")) : D9(this, this.pause)
    };
    g.k.seekTo = function(a) {
        if (C9(this)) {
            if (this.j) {
                var b = B9(this),
                    c = new chrome.cast.media.SeekRequest;
                c.currentTime = a;
                b.hd() || 3 == b.playerState ? c.resumeState = chrome.cast.media.ResumeState.PLAYBACK_START : c.resumeState = chrome.cast.media.ResumeState.PLAYBACK_PAUSE;
                this.j.seek(c, g.Gd, G9(this, "seekTo", {
                    newTime: a
                }))
            } else F9(this, "seekTo", {
                newTime: a
            });
            Srb(this, 3, a);
            this.oa("remotePlayerChange")
        } else D9(this, g.Xa(this.seekTo, a))
    };
    g.k.stop = function() {
        if (C9(this)) {
            this.j ? this.j.stop(null, g.Gd, G9(this, "stopVideo")) : F9(this, "stopVideo");
            var a = B9(this);
            a.index = -1;
            a.videoId = "";
            Orb(a);
            E9(this, a);
            this.oa("remotePlayerChange")
        } else D9(this, this.stop)
    };
    g.k.setVolume = function(a, b) {
        if (C9(this)) {
            var c = B9(this);
            if (this.u) {
                if (c.volume != a) {
                    var d = Math.round(a) / 100;
                    this.u.setReceiverVolumeLevel(d, (0, g.Wa)(function() {
                        S8("set receiver volume: " + d)
                    }, this), (0, g.Wa)(function() {
                        this.Wf("failed to set receiver volume.")
                    }, this))
                }
                c.muted != b && this.u.setReceiverMuted(b, (0, g.Wa)(function() {
                    S8("set receiver muted: " + b)
                }, this), (0, g.Wa)(function() {
                    this.Wf("failed to set receiver muted.")
                }, this))
            } else {
                var e = {
                    volume: a,
                    muted: b
                }; - 1 != c.volume && (e.delta = a - c.volume);
                F9(this, "setVolume", e)
            }
            c.muted = b;
            c.volume = a;
            E9(this, c)
        } else D9(this, g.Xa(this.setVolume, a, b))
    };
    g.k.dR = function(a, b) {
        if (C9(this)) {
            var c = B9(this);
            a = {
                videoId: a
            };
            b && (c.trackData = {
                trackName: b.name,
                languageCode: b.languageCode,
                sourceLanguageCode: b.translationLanguage ? b.translationLanguage.languageCode : "",
                languageName: b.languageName,
                kind: b.kind
            }, a.style = g.Wi(b.style), g.kd(a, c.trackData));
            F9(this, "setSubtitlesTrack", a);
            E9(this, c)
        } else D9(this, g.Xa(this.dR, a, b))
    };
    g.k.setAudioTrack = function(a, b) {
        C9(this) ? (b = b.getLanguageInfo().getId(), F9(this, "setAudioTrack", {
            videoId: a,
            audioTrackId: b
        }), a = B9(this), a.audioTrackId = b, E9(this, a)) : D9(this, g.Xa(this.setAudioTrack, a, b))
    };
    g.k.playVideo = function(a, b, c, d, e, f, h) {
        d = void 0 === d ? null : d;
        e = void 0 === e ? null : e;
        f = void 0 === f ? null : f;
        h = void 0 === h ? null : h;
        var l = B9(this),
            m = {
                videoId: a
            };
        void 0 !== c && (m.currentIndex = c);
        y9(l, a, c || 0);
        void 0 !== b && (w9(l, b), m.currentTime = b);
        d && (m.listId = d);
        e && (m.playerParams = e);
        f && (m.clickTrackingParams = f);
        h && (m.locationInfo = g.Wi(h));
        F9(this, "setPlaylist", m);
        d || E9(this, l)
    };
    g.k.tH = function(a, b) {
        if (C9(this)) {
            if (a && b) {
                var c = B9(this);
                y9(c, a, b);
                E9(this, c)
            }
            F9(this, "previous")
        } else D9(this, g.Xa(this.tH, a, b))
    };
    g.k.nextVideo = function(a, b) {
        if (C9(this)) {
            if (a && b) {
                var c = B9(this);
                y9(c, a, b);
                E9(this, c)
            }
            F9(this, "next")
        } else D9(this, g.Xa(this.nextVideo, a, b))
    };
    g.k.ZE = function() {
        if (C9(this)) {
            F9(this, "clearPlaylist");
            var a = B9(this);
            a.reset();
            E9(this, a);
            this.oa("remotePlayerChange")
        } else D9(this, this.ZE)
    };
    g.k.lT = function() {
        C9(this) ? F9(this, "dismissAutoplay") : D9(this, this.lT)
    };
    g.k.dispose = function() {
        if (3 != this.B) {
            var a = this.B;
            this.B = 3;
            this.oa("proxyStateChange", a, this.B)
        }
        g.yE.prototype.dispose.call(this)
    };
    g.k.ra = function() {
        Rrb(this);
        this.C = null;
        this.D.clear();
        z9(this, null);
        g.yE.prototype.ra.call(this)
    };
    g.k.aP = function(a) {
        if ((a != this.B || 2 == a) && 3 != this.B && 0 != a) {
            var b = this.B;
            this.B = a;
            this.oa("proxyStateChange", b, a);
            if (1 == a)
                for (; !this.D.isEmpty();) b = a = this.D, 0 === b.j.length && (b.j = b.u, b.j.reverse(), b.u = []), a.j.pop().apply(this);
            else 3 == a && this.dispose()
        }
    };
    g.k.J6 = function(a, b) {
        this.oa(a, b)
    };
    g.k.z5 = function(a) {
        if (!a) this.NC(null), z9(this, null);
        else if (this.u.receiver.volume) {
            a = this.u.receiver.volume;
            var b = B9(this),
                c = Math.round(100 * a.level || 0);
            if (b.volume != c || b.muted != a.muted) S8("Cast volume update: " + a.level + (a.muted ? " muted" : "")), b.volume = c, b.muted = !!a.muted, E9(this, b)
        }
    };
    g.k.NC = function(a) {
        S8("Cast media: " + !!a);
        this.j && this.j.removeUpdateListener(this.V);
        if (this.j = a) this.j.addUpdateListener(this.V), Trb(this), this.oa("remotePlayerChange")
    };
    g.k.y5 = function(a) {
        a ? (Trb(this), this.oa("remotePlayerChange")) : this.NC(null)
    };
    g.k.AP = function() {
        F9(this, "sendDebugCommand", {
            debugCommand: "stats4nerds "
        })
    };
    g.k.E5 = function() {
        var a = Lrb();
        a && z9(this, a)
    };
    g.k.Wf = function(a) {
        R8("CP", a)
    };
    g.x(J9, g.yE);
    g.k = J9.prototype;
    g.k.connect = function(a, b) {
        if (b) {
            var c = b.listId,
                d = b.videoId,
                e = b.videoIds,
                f = b.playerParams,
                h = b.clickTrackingParams,
                l = b.index,
                m = {
                    videoId: d
                },
                n = b.currentTime,
                p = b.locationInfo;
            b = b.loopMode;
            void 0 !== n && (m.currentTime = 5 >= n ? 0 : n);
            f && (m.playerParams = f);
            p && (m.locationInfo = p);
            h && (m.clickTrackingParams = h);
            c && (m.listId = c);
            e && 0 < e.length && (m.videoIds = e.join(","));
            void 0 !== l && (m.currentIndex = l);
            this.Ja && (m.loopMode = b || "LOOP_MODE_OFF");
            c && (this.j.listId = c);
            this.j.videoId = d;
            this.j.index = l || 0;
            this.j.state = 3;
            w9(this.j,
                n);
            this.D = "UNSUPPORTED";
            c = this.Ja ? "setInitialState" : "setPlaylist";
            H9("Connecting with " + c + " and params: " + g.Wi(m));
            this.u.connect({
                method: c,
                params: g.Wi(m)
            }, a, vob())
        } else H9("Connecting without params"), this.u.connect({}, a, vob());
        Xrb(this)
    };
    g.k.Xq = function(a) {
        this.u.Xq(a)
    };
    g.k.dispose = function() {
        this.isDisposed() || (g.Ma("yt.mdx.remote.remoteClient_", null), this.oa("beforeDispose"), I9(this, 3));
        g.yE.prototype.dispose.call(this)
    };
    g.k.ra = function() {
        Yrb(this);
        $rb(this);
        Zrb(this);
        g.Zy(this.V);
        this.V = NaN;
        g.Zy(this.ea);
        this.ea = NaN;
        this.C = null;
        g.aA(this.ma);
        this.ma.length = 0;
        this.u.dispose();
        g.yE.prototype.ra.call(this);
        this.D = this.K = this.B = this.j = this.u = null
    };
    g.k.SU = function(a) {
        if (!this.B || 0 === this.B.length) return !1;
        for (var b = g.v(this.B), c = b.next(); !c.done; c = b.next())
            if (!c.value.capabilities.has(a)) return !1;
        return !0
    };
    g.k.o3 = function() {
        var a = 3;
        this.isDisposed() || (a = 0, isNaN(this.OB()) ? this.u.My() && isNaN(this.J) && (a = 1) : a = 2);
        return a
    };
    g.k.ly = function(a) {
        H9("Disconnecting with " + a);
        g.Ma("yt.mdx.remote.remoteClient_", null);
        Yrb(this);
        this.oa("beforeDisconnect", a);
        1 == a && $7();
        this.u.disconnect(a);
        this.dispose()
    };
    g.k.m3 = function() {
        var a = this.j;
        this.C && (a = this.j.clone(), y9(a, this.C, a.index));
        return Prb(a)
    };
    g.k.L8 = function(a) {
        var b = this,
            c = new u9(a);
        c.videoId && c.videoId != this.j.videoId && (this.C = c.videoId, g.Zy(this.V), this.V = g.Xy(function() {
            if (b.C) {
                var e = b.C;
                b.C = null;
                b.j.videoId != e && K9(b, "getNowPlaying")
            }
        }, 5E3));
        var d = [];
        this.j.listId == c.listId && this.j.videoId == c.videoId && this.j.index == c.index || d.push("remoteQueueChange");
        this.j.playerState == c.playerState && this.j.volume == c.volume && this.j.muted == c.muted && x9(this.j) == x9(c) && g.Wi(this.j.trackData) == g.Wi(c.trackData) || d.push("remotePlayerChange");
        this.j.reset(a);
        g.Wb(d, function(e) {
            this.oa(e)
        }, this)
    };
    g.k.bU = function() {
        var a = this.u.ys(),
            b = g.xb(this.B, function(c) {
                return "REMOTE_CONTROL" == c.type && c.id != a
            });
        return b ? b.id : ""
    };
    g.k.OB = function() {
        return this.u.Hs()
    };
    g.k.f3 = function() {
        return this.D || "UNSUPPORTED"
    };
    g.k.g3 = function() {
        return this.K || ""
    };
    g.k.C_ = function() {
        !isNaN(this.OB()) && this.u.Wv()
    };
    g.k.H8 = function(a, b) {
        K9(this, a, b);
        bsb(this)
    };
    g.k.eR = function() {
        var a = g.mz("SID", "") || "",
            b = g.mz("SAPISID", "") || "",
            c = g.mz("__Secure-3PAPISID", "") || "";
        if (!a && !b && !c) return "";
        a = g.Rf(g.Qf(a), 2);
        b = g.Rf(g.Qf(b), 2);
        c = g.Rf(g.Qf(c), 2);
        return g.Rf(g.Qf(a + "," + b + "," + c), 2)
    };
    J9.prototype.subscribe = J9.prototype.subscribe;
    J9.prototype.unsubscribeByKey = J9.prototype.Jh;
    J9.prototype.getProxyState = J9.prototype.o3;
    J9.prototype.disconnect = J9.prototype.ly;
    J9.prototype.getPlayerContextData = J9.prototype.m3;
    J9.prototype.setPlayerContextData = J9.prototype.L8;
    J9.prototype.getOtherConnectedRemoteId = J9.prototype.bU;
    J9.prototype.getReconnectTimeout = J9.prototype.OB;
    J9.prototype.getAutoplayMode = J9.prototype.f3;
    J9.prototype.getAutoplayVideoId = J9.prototype.g3;
    J9.prototype.reconnect = J9.prototype.C_;
    J9.prototype.sendMessage = J9.prototype.H8;
    J9.prototype.getXsrfToken = J9.prototype.eR;
    J9.prototype.isCapabilitySupportedOnConnectedDevices = J9.prototype.SU;
    g.x(nsb, W8);
    g.k = nsb.prototype;
    g.k.Ak = function(a) {
        return this.Xg.$_gs(a)
    };
    g.k.contains = function(a) {
        return !!this.Xg.$_c(a)
    };
    g.k.get = function(a) {
        return this.Xg.$_g(a)
    };
    g.k.start = function() {
        this.Xg.$_st()
    };
    g.k.add = function(a, b, c) {
        this.Xg.$_a(a, b, c)
    };
    g.k.remove = function(a, b, c) {
        this.Xg.$_r(a, b, c)
    };
    g.k.nI = function(a, b, c, d) {
        this.Xg.$_un(a, b, c, d)
    };
    g.k.ra = function() {
        for (var a = 0, b = this.j.length; a < b; ++a) this.Xg.$_ubk(this.j[a]);
        this.j.length = 0;
        this.Xg = null;
        W8.prototype.ra.call(this)
    };
    g.k.D_ = function() {
        this.oa("screenChange")
    };
    g.k.r6 = function() {
        this.oa("onlineScreenChange")
    };
    a9.prototype.$_st = a9.prototype.start;
    a9.prototype.$_gspc = a9.prototype.x_;
    a9.prototype.$_gsppc = a9.prototype.aR;
    a9.prototype.$_c = a9.prototype.contains;
    a9.prototype.$_g = a9.prototype.get;
    a9.prototype.$_a = a9.prototype.add;
    a9.prototype.$_un = a9.prototype.nI;
    a9.prototype.$_r = a9.prototype.remove;
    a9.prototype.$_gs = a9.prototype.Ak;
    a9.prototype.$_gos = a9.prototype.ZQ;
    a9.prototype.$_s = a9.prototype.subscribe;
    a9.prototype.$_ubk = a9.prototype.Jh;
    var V9 = null,
        Y9 = !1,
        L9 = null,
        M9 = null,
        ysb = null,
        Q9 = [];
    g.x(Dsb, g.D);
    g.k = Dsb.prototype;
    g.k.ra = function() {
        g.D.prototype.ra.call(this);
        this.j.stop();
        this.u.stop();
        this.K.stop();
        var a = this.Bc;
        a.unsubscribe("proxyStateChange", this.wW, this);
        a.unsubscribe("remotePlayerChange", this.UC, this);
        a.unsubscribe("remoteQueueChange", this.cH, this);
        a.unsubscribe("previousNextChange", this.tW, this);
        a.unsubscribe("nowAutoplaying", this.oW, this);
        a.unsubscribe("autoplayDismissed", this.TV, this);
        this.Bc = this.module = null
    };
    g.k.Dk = function(a) {
        var b = g.Ea.apply(1, arguments);
        if (2 != this.Bc.B)
            if (Z9(this)) {
                if (1081 != B9(this.Bc).playerState || "control_seek" !== a) switch (a) {
                    case "control_toggle_play_pause":
                        B9(this.Bc).hd() ? this.Bc.pause() : this.Bc.play();
                        break;
                    case "control_play":
                        this.Bc.play();
                        break;
                    case "control_pause":
                        this.Bc.pause();
                        break;
                    case "control_seek":
                        this.J.bJ(b[0], b[1]);
                        break;
                    case "control_subtitles_set_track":
                        Fsb(this, b[0]);
                        break;
                    case "control_set_audio_track":
                        this.setAudioTrack(b[0])
                }
            } else switch (a) {
                case "control_toggle_play_pause":
                case "control_play":
                case "control_pause":
                    b =
                        this.G.getCurrentTime();
                    $9(this, 0 === b ? void 0 : b);
                    break;
                case "control_seek":
                    $9(this, b[0]);
                    break;
                case "control_subtitles_set_track":
                    Fsb(this, b[0]);
                    break;
                case "control_set_audio_track":
                    this.setAudioTrack(b[0])
            }
    };
    g.k.w5 = function(a) {
        this.K.c_(a)
    };
    g.k.B9 = function(a) {
        this.Dk("control_subtitles_set_track", g.cd(a) ? null : a)
    };
    g.k.bY = function() {
        var a = this.G.getOption("captions", "track");
        g.cd(a) || Fsb(this, a)
    };
    g.k.zc = function(a) {
        this.module.zc(a, this.G.getVideoData().lengthSeconds)
    };
    g.k.c6 = function() {
        g.cd(this.B) || Gsb(this, this.B);
        this.C = !1
    };
    g.k.wW = function(a, b) {
        this.u.stop();
        2 === b && this.SX()
    };
    g.k.UC = function() {
        if (Z9(this)) {
            this.j.stop();
            var a = B9(this.Bc);
            switch (a.playerState) {
                case 1080:
                case 1081:
                case 1084:
                case 1085:
                    this.module.Eh = 1;
                    break;
                case 1082:
                case 1083:
                    this.module.Eh = 0;
                    break;
                default:
                    this.module.Eh = -1
            }
            switch (a.playerState) {
                case 1081:
                case 1:
                    this.wc(new g.rP(8));
                    this.RX();
                    break;
                case 1085:
                case 3:
                    this.wc(new g.rP(9));
                    break;
                case 1083:
                case 0:
                    this.wc(new g.rP(2));
                    this.J.stop();
                    this.zc(this.G.getVideoData().lengthSeconds);
                    break;
                case 1084:
                    this.wc(new g.rP(4));
                    break;
                case 2:
                    this.wc(new g.rP(4));
                    this.zc(x9(a));
                    break;
                case -1:
                    this.wc(new g.rP(64));
                    break;
                case -1E3:
                    this.wc(new g.rP(128, {
                        errorCode: "mdx.remoteerror",
                        errorMessage: "\u041e\u0432\u0430\u0458 \u0432\u0438\u0434\u0435\u043e \u043d\u0438\u0458\u0435 \u0434\u043e\u0441\u0442\u0443\u043f\u0430\u043d \u0437\u0430 \u0434\u0430\u0459\u0438\u043d\u0441\u043a\u0443 \u0440\u0435\u043f\u0440\u043e\u0434\u0443\u043a\u0446\u0438\u0458\u0443.",
                        sF: 2
                    }))
            }
            a = B9(this.Bc).trackData;
            var b = this.B;
            (a || b ? a && b && a.trackName == b.trackName && a.languageCode == b.languageCode &&
                a.languageName == b.languageName && a.kind == b.kind : 1) || (this.B = a, Gsb(this, a));
            a = B9(this.Bc); - 1 === a.volume || Math.round(this.G.getVolume()) === a.volume && this.G.isMuted() === a.muted || this.V.isActive() || this.GY()
        } else Esb(this)
    };
    g.k.tW = function() {
        this.G.oa("mdxpreviousnextchange")
    };
    g.k.cH = function() {
        Z9(this) || Esb(this)
    };
    g.k.oW = function(a) {
        isNaN(a) || this.G.oa("mdxnowautoplaying", a)
    };
    g.k.TV = function() {
        this.G.oa("mdxautoplaycanceled")
    };
    g.k.setAudioTrack = function(a) {
        Z9(this) && this.Bc.setAudioTrack(this.G.getVideoData(1).videoId, a)
    };
    g.k.seekTo = function(a, b) {
        -1 === B9(this.Bc).playerState ? $9(this, a) : b && this.Bc.seekTo(a)
    };
    g.k.GY = function() {
        var a = this;
        if (Z9(this)) {
            var b = B9(this.Bc);
            this.events.Ic(this.ea);
            b.muted ? this.G.mute() : this.G.unMute();
            this.G.setVolume(b.volume);
            this.ea = this.events.T(this.G, "onVolumeChange", function(c) {
                Bsb(a, c)
            })
        }
    };
    g.k.RX = function() {
        this.j.stop();
        if (!this.Bc.isDisposed()) {
            var a = B9(this.Bc);
            a.hd() && this.wc(new g.rP(8));
            this.zc(x9(a));
            this.j.start()
        }
    };
    g.k.SX = function() {
        this.u.stop();
        this.j.stop();
        var a = this.Bc.Hs();
        2 == this.Bc.B && !isNaN(a) && this.u.start()
    };
    g.k.wc = function(a) {
        this.u.stop();
        var b = this.D;
        if (!g.Uza(b, a)) {
            var c = g.BO(a, 2);
            c !== g.BO(this.D, 2) && this.G.Pz(c);
            this.D = a;
            Isb(this.module, b, a)
        }
    };
    g.x(a$, g.V);
    a$.prototype.pd = function() {
        this.j.show()
    };
    a$.prototype.Kb = function() {
        this.j.hide()
    };
    a$.prototype.u = function() {
        b8("mdx-privacy-popup-cancel");
        this.Kb()
    };
    a$.prototype.B = function() {
        b8("mdx-privacy-popup-confirm");
        this.Kb()
    };
    g.x(b$, g.V);
    b$.prototype.onStateChange = function(a) {
        this.xc(a.state)
    };
    b$.prototype.xc = function(a) {
        if (3 === this.api.getPresentingPlayerType()) {
            var b = {
                RECEIVER_NAME: this.api.getOption("remote", "currentReceiver").name
            };
            a = g.BO(a, 128) ? g.XO("\u0413\u0440\u0435\u0448\u043a\u0430 \u043d\u0430 $RECEIVER_NAME", b) : a.hd() || g.wP(a) ? g.XO("\u0420\u0435\u043f\u0440\u043e\u0434\u0443\u043a\u0443\u0458\u0435 \u0441\u0435 \u043d\u0430 $RECEIVER_NAME", b) : g.XO("\u041f\u043e\u0432\u0435\u0437\u0430\u043d \u043d\u0430 $RECEIVER_NAME", b);
            this.updateValue("statustext", a);
            this.j.show()
        } else this.j.hide()
    };
    g.x(c$, g.yV);
    c$.prototype.C = function() {
        var a = this.G.getOption("remote", "receivers");
        a && 1 < a.length && !this.G.getOption("remote", "quickCast") ? (this.Ct = g.Xb(a, this.j, this), g.zV(this, g.qm(a, this.j)), a = this.G.getOption("remote", "currentReceiver"), a = this.j(a), this.options[a] && this.xj(a), this.enable(!0)) : this.enable(!1)
    };
    c$.prototype.j = function(a) {
        return a.key
    };
    c$.prototype.jk = function(a) {
        return "cast-selector-receiver" === a ? "\u041f\u0440\u0435\u0431\u0430\u0446\u0438\u2026" : this.Ct[a].name
    };
    c$.prototype.ih = function(a) {
        g.yV.prototype.ih.call(this, a);
        this.G.setOption("remote", "currentReceiver", this.Ct[a]);
        this.Jb.Kb()
    };
    g.x(Hsb, g.uT);
    g.k = Hsb.prototype;
    g.k.create = function() {
        var a = this.player.W(),
            b = g.UK(a);
        a = {
            device: "Desktop",
            app: "youtube-desktop",
            loadCastApiSetupScript: a.N("mdx_load_cast_api_bootstrap_script"),
            enableDialLoungeToken: a.N("enable_dial_short_lived_lounge_token"),
            enableCastLoungeToken: a.N("enable_cast_short_lived_lounge_token")
        };
        ssb(b, a);
        this.subscriptions.push(g.JC("yt-remote-before-disconnect", this.u5, this));
        this.subscriptions.push(g.JC("yt-remote-connection-change", this.P6, this));
        this.subscriptions.push(g.JC("yt-remote-receiver-availability-change", this.vW,
            this));
        this.subscriptions.push(g.JC("yt-remote-auto-connect", this.N6, this));
        this.subscriptions.push(g.JC("yt-remote-receiver-resumed", this.M6, this));
        this.subscriptions.push(g.JC("mdx-privacy-popup-confirm", this.g8, this));
        this.subscriptions.push(g.JC("mdx-privacy-popup-cancel", this.f8, this));
        this.vW()
    };
    g.k.load = function() {
        this.player.cancelPlayback();
        g.uT.prototype.load.call(this);
        this.Dl = new Dsb(this, this.player, this.Bc);
        var a = (a = Asb()) ? a.currentTime : 0;
        var b = xsb() ? new A9(U9(), void 0) : null;
        0 == a && b && (a = x9(B9(b)));
        0 !== a && this.zc(a);
        Isb(this, this.bf, this.bf);
        this.player.rp(6)
    };
    g.k.unload = function() {
        this.player.oa("mdxautoplaycanceled");
        this.Wr = this.fp;
        g.lb(this.Dl, this.Bc);
        this.Bc = this.Dl = null;
        g.uT.prototype.unload.call(this);
        this.player.rp(5);
        d$(this)
    };
    g.k.ra = function() {
        g.KC(this.subscriptions);
        g.uT.prototype.ra.call(this)
    };
    g.k.PC = function(a) {
        var b = g.Ea.apply(1, arguments);
        this.loaded && this.Dl.Dk.apply(this.Dl, [a].concat(g.oa(b)))
    };
    g.k.getAdState = function() {
        return this.Eh
    };
    g.k.Qo = function() {
        return this.Bc ? B9(this.Bc).Qo : !1
    };
    g.k.Ek = function() {
        return this.Bc ? B9(this.Bc).Ek : !1
    };
    g.k.zc = function(a, b) {
        this.dV = a || 0;
        this.player.oa("progresssync", a, b);
        this.player.Pa("onVideoProgress", a || 0)
    };
    g.k.getCurrentTime = function() {
        return this.dV
    };
    g.k.getProgressState = function() {
        var a = B9(this.Bc),
            b = this.player.getVideoData();
        return {
            airingStart: 0,
            airingEnd: 0,
            allowSeeking: 1081 != a.playerState && this.player.Dh(),
            clipEnd: b.clipEnd,
            clipStart: b.clipStart,
            current: this.getCurrentTime(),
            displayedStart: -1,
            duration: a.getDuration(),
            ingestionTime: a.u ? a.B + v9(a) : a.B,
            isAtLiveHead: 1 >= (a.u ? a.j + v9(a) : a.j) - this.getCurrentTime(),
            loaded: a.V,
            seekableEnd: a.u ? a.j + v9(a) : a.j,
            seekableStart: 0 < a.C ? a.C + v9(a) : a.C,
            offset: 0,
            viewerLivestreamJoinTime: b.viewerLivestreamJoinTime
        }
    };
    g.k.nextVideo = function() {
        this.Bc && this.Bc.nextVideo()
    };
    g.k.tH = function() {
        this.Bc && this.Bc.tH()
    };
    g.k.u5 = function(a) {
        1 === a && (this.lO = this.Bc ? B9(this.Bc) : null)
    };
    g.k.P6 = function() {
        var a = xsb() ? new A9(U9(), void 0) : null;
        if (a) {
            var b = this.Wr;
            this.loaded && this.unload();
            this.Bc = a;
            this.lO = null;
            b.key !== this.fp.key && (this.Wr = b, this.load())
        } else g.kb(this.Bc), this.Bc = null, this.loaded && (this.unload(), (a = this.lO) && a.videoId === this.player.getVideoData().videoId && this.player.cueVideoById(a.videoId, x9(a)));
        this.player.oa("videodatachange", "newdata", this.player.getVideoData(), 3)
    };
    g.k.vW = function() {
        var a = [this.fp],
            b = a.concat,
            c = tsb();
        r9() && g.mA("yt-remote-cast-available") && c.push({
            key: "cast-selector-receiver",
            name: "Cast..."
        });
        this.Ct = b.call(a, c);
        a = vsb() || this.fp;
        e$(this, a);
        this.player.Pa("onMdxReceiversChange")
    };
    g.k.N6 = function() {
        var a = vsb();
        e$(this, a)
    };
    g.k.M6 = function() {
        this.Wr = vsb()
    };
    g.k.g8 = function() {
        this.jD = !0;
        d$(this);
        Y9 = !1;
        V9 && X9(V9, 1);
        V9 = null
    };
    g.k.f8 = function() {
        this.jD = !1;
        d$(this);
        e$(this, this.fp);
        this.Wr = this.fp;
        Y9 = !1;
        V9 = null;
        this.player.playVideo()
    };
    g.k.wh = function(a, b) {
        switch (a) {
            case "casting":
                return this.loaded;
            case "receivers":
                return this.Ct;
            case "currentReceiver":
                return b && ("cast-selector-receiver" === b.key ? Mrb() : e$(this, b)), this.loaded ? this.Wr : this.fp;
            case "quickCast":
                return 2 === this.Ct.length && "cast-selector-receiver" === this.Ct[1].key ? (b && Mrb(), !0) : !1
        }
    };
    g.k.AP = function() {
        this.Bc.AP()
    };
    g.k.Yk = function() {
        return !1
    };
    g.k.getOptions = function() {
        return ["casting", "receivers", "currentReceiver", "quickCast"]
    };
    g.tT("remote", Hsb);
})(_yt_player);