--
-- PostgreSQL database dump
--

-- Dumped from database version 14.5 (Homebrew)
-- Dumped by pg_dump version 14.5 (Homebrew)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: SequelizeMeta; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."SequelizeMeta" (
    name character varying(255) NOT NULL
);


--
-- Name: biodataGames; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."biodataGames" (
    id integer NOT NULL,
    username character varying(255),
    email character varying(255),
    "levelAccount" integer,
    "listGameId" integer,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


--
-- Name: biodataGames_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."biodataGames_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: biodataGames_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."biodataGames_id_seq" OWNED BY public."biodataGames".id;


--
-- Name: historyGames; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."historyGames" (
    id integer NOT NULL,
    update text,
    version character varying(255),
    rating integer,
    "listGameId" integer,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


--
-- Name: historyGames_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."historyGames_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: historyGames_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."historyGames_id_seq" OWNED BY public."historyGames".id;


--
-- Name: listGames; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."listGames" (
    id integer NOT NULL,
    "nameGame" character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


--
-- Name: listGames_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."listGames_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: listGames_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."listGames_id_seq" OWNED BY public."listGames".id;


--
-- Name: biodataGames id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."biodataGames" ALTER COLUMN id SET DEFAULT nextval('public."biodataGames_id_seq"'::regclass);


--
-- Name: historyGames id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."historyGames" ALTER COLUMN id SET DEFAULT nextval('public."historyGames_id_seq"'::regclass);


--
-- Name: listGames id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."listGames" ALTER COLUMN id SET DEFAULT nextval('public."listGames_id_seq"'::regclass);


--
-- Data for Name: SequelizeMeta; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public."SequelizeMeta" (name) FROM stdin;
20220905150038-create-list-game.js
20220905150255-create-biodata-game.js
20220905151518-create-history-game.js
\.


--
-- Data for Name: biodataGames; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public."biodataGames" (id, username, email, "levelAccount", "listGameId", "createdAt", "updatedAt") FROM stdin;
2	dewi	deqi@abc.com	10	6	2022-09-05 22:17:58.219+07	2022-09-05 22:17:58.219+07
3	lufy	lufy@abc.com	21	7	2022-09-05 22:32:22.19+07	2022-09-05 22:32:22.19+07
6	justin	justin@abc.com	32	2	2022-09-06 09:39:50.744+07	2022-09-06 09:39:50.744+07
12	mac	mac@abc.com	5	7	2022-09-06 11:41:09.313+07	2022-09-06 11:41:09.313+07
13	satya	satys@abc.com	17	3	2022-09-06 11:50:54.543+07	2022-09-06 11:50:54.543+07
14	dea syah	dean_syah@abc.com	21	2	2022-09-06 13:10:57.799+07	2022-09-06 13:11:21.531+07
15	raka santoso	rakaS@abc.com	45	1	2022-09-06 13:20:05.633+07	2022-09-06 13:20:34.363+07
1	AdiGT	adiGT@abc.com	21	1	2022-09-05 22:13:07.97+07	2022-09-06 13:49:46.229+07
16	maria	maria@abc.com	72	1	2022-09-06 20:10:29.718+07	2022-09-06 20:10:29.718+07
\.


--
-- Data for Name: historyGames; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public."historyGames" (id, update, version, rating, "listGameId", "createdAt", "updatedAt") FROM stdin;
\.


--
-- Data for Name: listGames; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public."listGames" (id, "nameGame", "createdAt", "updatedAt") FROM stdin;
1	FIFA19	2022-09-05 22:06:03.016+07	2022-09-05 22:06:03.016+07
2	FIFA20	2022-09-05 22:06:09.661+07	2022-09-05 22:06:09.661+07
3	FIFA21	2022-09-05 22:12:32.107+07	2022-09-05 22:12:32.107+07
4	FIFA22	2022-09-05 22:12:38.461+07	2022-09-05 22:12:38.461+07
5	PUBG	2022-09-05 22:13:29.142+07	2022-09-05 22:13:29.142+07
6	Call of Duty	2022-09-05 22:17:33.071+07	2022-09-05 22:17:33.071+07
7	YUGIOH	2022-09-05 22:32:04.067+07	2022-09-05 22:32:04.067+07
8	CandyCrush	2022-09-05 23:39:38.665+07	2022-09-05 23:39:38.665+07
\.


--
-- Name: biodataGames_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."biodataGames_id_seq"', 16, true);


--
-- Name: historyGames_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."historyGames_id_seq"', 1, false);


--
-- Name: listGames_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."listGames_id_seq"', 8, true);


--
-- Name: SequelizeMeta SequelizeMeta_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."SequelizeMeta"
    ADD CONSTRAINT "SequelizeMeta_pkey" PRIMARY KEY (name);


--
-- Name: biodataGames biodataGames_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."biodataGames"
    ADD CONSTRAINT "biodataGames_pkey" PRIMARY KEY (id);


--
-- Name: historyGames historyGames_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."historyGames"
    ADD CONSTRAINT "historyGames_pkey" PRIMARY KEY (id);


--
-- Name: listGames listGames_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."listGames"
    ADD CONSTRAINT "listGames_pkey" PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

